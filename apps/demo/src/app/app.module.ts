import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppUniverseModule } from 'libs/angular-universe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DrillingComponent } from './components/drilling/drilling.component';
import { FullComponent } from './components/full/full.component';
import { DataProviderService } from './services/data-provider.service';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER, appReducer } from './state/app.reducers';
import { environment } from './../environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { IUniverseConfigurationService } from 'libs/angular-universe/src/services/iuniverse.configuration.service';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { UniverseConfig } from 'libs/angular-universe/src/model/universe.config';
import { AppState } from 'apps/demo/src/app/state/app.state';
import { AppEffectTest } from './state/app.effects';
import { AppEffectOtherTest } from './state/app.other.effects';

const configService: IUniverseConfigurationService = {
    getConfiguration() : Observable<UniverseConfig> {
      const configJson: UniverseConfig = <UniverseConfig> require('./app-config/config.json');
      return Observable.of(configJson).delay(3000);
    }
}
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'drilling',
    component: DrillingComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'full',
    component: FullComponent,
    data: { title: 'Heroes List' }
  }
];

import { IUniverseConfigurationService } from 'libs/angular-universe/src/services/iuniverse.configuration.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';
import { UniverseConfig } from 'libs/angular-universe/src/model/universe.config';
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppUniverseModule.provide<AppState>(configService, ROOT_REDUCER, [AppEffectTest, AppEffectOtherTest]),
    HttpClientModule,
    //!environment.production? StoreDevtoolsModule.instrument() : [],
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    DataProviderService,
    AppEffectTest,
    AppEffectOtherTest
  ],
  declarations: [AppComponent, HomeComponent, DrillingComponent, FullComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
