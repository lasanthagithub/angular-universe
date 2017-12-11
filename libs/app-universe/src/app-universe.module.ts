import { NgModule, ModuleWithProviders, APP_INITIALIZER, Inject, InjectionToken, Type, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';
import { UniverseConfig } from './model/universe.config';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule,   MatCardModule, MatSidenavModule, MatMenuModule, MatButtonModule  } from '@angular/material';
import { EffectsModule, EffectSources, mergeEffects } from '@ngrx/effects';
import { StoreModule, Store, ActionReducerMap, combineReducers } from '@ngrx/store';
import { UniverseLoaderEffects } from './state/universe.loader/universe.loader.effects';
import { UNIVERSE_REDUCERS } from './state/universe.reducer';
import { UniverseState } from './state/universe.state';
import { InitiateUniverseLoader, LoadUniverseConfig } from './state/universe.loader/universe.loader.actions';
import { UniverseConfigQuery } from './state/universe.loader/universe.loader.query';
import { IUniverseConfigurationService } from './services/iuniverse.configuration.service';
import 'rxjs/add/operator/filter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { merge } from 'rxjs/observable/merge';
export const REDUCER_TOKEN: InjectionToken<ActionReducerMap<UniverseState>> = new InjectionToken<ActionReducerMap<UniverseState>>('Registered Reducers');
export const EFFECTS_TOKEN: InjectionToken<Type<any>[]> = new InjectionToken<Type<any>[]>('Registered Effects');

export function getReducers(reducers: ActionReducerMap<any>): ActionReducerMap<UniverseState> {
         
  return { ...UNIVERSE_REDUCERS, ...reducers};
}
function getEffects(effects: Type<any>[]): Type<any>[] {
  return { ...EFFECTS_TOKEN, ...effects};
}



export const BOOTSTRAP_EFFECTS = new InjectionToken('Bootstrap Effects');

export function bootstrapEffects(effects: Type<any>[], sources: EffectSources, store: Store<UniverseState>) {
  return () => {
    effects.forEach(effect => {
      sources.addEffects(effect);
    });
    return sources;
  };
}
export function createEffects(effects, store) {
  console.log(effects);
  //return [new effects[0]()];
  return [effects];
}
export function createInstances(...instances: any[]) {
  return instances;
}

export function provideBootstrapEffects(effects: Type<any>[]) {
  return [
    effects,
    { provide: BOOTSTRAP_EFFECTS, deps: effects, useFactory: createInstances },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: bootstrapEffects,
      deps: [[new Inject(BOOTSTRAP_EFFECTS)], EffectSources]
    }
  ];
}



export function appInit(store: Store<UniverseState>) {
  return () => new Promise((resolve, reject) => {
    store.dispatch(new InitiateUniverseLoader());
    store.dispatch(new LoadUniverseConfig());
    const sub = store.select(UniverseConfigQuery.universeReady)
    .filter(isReady => isReady)
    .subscribe(()=> {
        sub.unsubscribe();
        resolve(true);
    });
  });
}
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([UniverseLoaderEffects]),
    StoreDevtoolsModule.instrument(),
    RouterModule.forChild([])
  ],
  declarations: [HeaderComponent, UniverseComponent, TrackScrollDirective, NavigationComponent],
  exports: [UniverseComponent],
  providers: [
    UniverseLoaderEffects,
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
      deps: [[new Inject("App_Reducers")]]
    },
    provideBootstrapEffects([UniverseLoaderEffects]),
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useFactory: bootstrapEffects,
      deps: [[new Inject("App_Effects")], EffectSources]
    },
    // {
    //   provide: EFFECTS_TOKEN,
    //   useFactory: getEffects,
    //   deps: [[new Inject("App_Effects")]]
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps:[[new Inject(Store)]]
    }
  ],
  bootstrap: []
})
export class AppUniverseModule {
  
  static provide<T>(configService: IUniverseConfigurationService, reducers: ActionReducerMap<T> = null, effects: Type<any>[]): ModuleWithProviders {
    return {
      ngModule: AppUniverseModule,
      providers: [
          {
            provide: 'UniverseConfigurationService',
            useValue: configService
          },
          {
            provide: 'App_Reducers',
            useValue: reducers
          },
          {
            provide: 'App_Effects', 
            useFactory: createEffects,
            deps: effects
          }
      ]
    };
  }
}
