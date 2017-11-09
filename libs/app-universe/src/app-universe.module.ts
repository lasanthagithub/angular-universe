import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';
import { BsRootModule } from 'ngx-bootstrap';
import { ConfigLoader, ConfigStaticLoader } from '@ngx-config/core';
import { ConfigService, ConfigModule } from '@ngx-config/core';
import { UniverseConfig } from './model/universe.config';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';

export function configLoaderFactory(): ConfigLoader {
  const config = new ConfigStaticLoader(AppUniverseModule.config);
  return config;
}
export function configLoaderFactorySettings(_configService: ConfigService): UniverseConfig {
  const anya = _configService.getSettings();
  return <UniverseConfig>_configService.getSettings();
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configLoaderFactory
    })
  ],
  declarations: [HeaderComponent, UniverseComponent, TrackScrollDirective, NavigationComponent],
  exports: [UniverseComponent],
  providers: [
    {
      provide: UniverseConfig,
      useFactory: configLoaderFactorySettings,
      deps: [ConfigService]
    }
  ],
  bootstrap: []
})
export class AppUniverseModule {
  static config: any;
  static fromConfig(config: any): ModuleWithProviders {
    AppUniverseModule.config = config;
    return {
      ngModule: AppUniverseModule
    };
  }
}
