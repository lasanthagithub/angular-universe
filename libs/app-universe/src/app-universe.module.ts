import { NgModule, ModuleWithProviders, APP_INITIALIZER, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';;
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';
import { UniverseConfig } from './model/universe.config';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule,   MatCardModule, MatSidenavModule, MatMenuModule, MatButtonModule  } from '@angular/material';
import { setTimeout } from 'timers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UniverseLoaderEffects } from './state/universe.loader/universe.loader.effects';
import { UNIVERSE_REDUCERS} from './state/universe.reducer';
import { Store } from '@ngrx/store';
import { UniverseState } from './state/universe.state';
import { InitiateUniverseLoader, LoadUniverseConfig } from './state/universe.loader/universe.loader.actions';
import { UniverseConfigQuery } from './state/universe.loader/universe.loader.query';
import { IUniverseConfigurationService } from './services/iuniverse.configuration.service';
import { filter } from 'rxjs/operator/filter';
import { UniverseConfigurationService } from '@workspace-demo/app-universe/src/services/universe.configuration.service';

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
    StoreModule.forFeature('universe', UNIVERSE_REDUCERS),
    EffectsModule.forFeature([UniverseLoaderEffects]),
    RouterModule.forChild([])
  ],
  declarations: [HeaderComponent, UniverseComponent, TrackScrollDirective, NavigationComponent],
  exports: [UniverseComponent],
  providers: [
    UniverseConfigurationService,
    UniverseLoaderEffects,
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
  
  static fromConfig(configService: IUniverseConfigurationService): ModuleWithProviders {
    return {
      ngModule: AppUniverseModule,
      providers: [
          {
            provide: 'UniverseConfigurationService',
            useValue: configService
        }
      ]
    };
  }
}
