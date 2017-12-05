import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AppUniverseModule, IConfigValue } from 'libs/app-universe';
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
import { ROOT_REDUCER } from './state/app.reducers';
import { environment } from './../environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { UniverseAppConfigService } from './services/universe.configuration.service';

const configService: UniverseAppConfigService = new UniverseAppConfigService();

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

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppUniverseModule.fromConfig(configService),
    StoreModule.forRoot(ROOT_REDUCER),
    EffectsModule.forRoot([]),
    HttpClientModule,
    !environment.production? StoreDevtoolsModule.instrument() : [],
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    DataProviderService
  ],
  declarations: [AppComponent, HomeComponent, DrillingComponent, FullComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
