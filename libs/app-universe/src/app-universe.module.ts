import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UniverseComponent } from './components/universe/universe.component';
import { TrackScrollDirective } from './directives/track-scroll.directive';
import { BsRootModule } from 'ngx-bootstrap';
import {ConfigLoader, ConfigStaticLoader} from '@ngx-config/core';
import {ConfigService, ConfigModule} from '@ngx-config/core';
import { HeaderConfig } from './model/configs';

export function configLoaderFactory(): ConfigLoader {
    const config = new ConfigStaticLoader(AppUniverseModule.config);
    // debugger;
    // const config = new ConfigStaticLoader(require('./config/header.json'));
    return config;
}
export function configLoaderFactorySettings(_configService: ConfigService): HeaderConfig {
    const anya = _configService.getSettings();
    return <HeaderConfig>_configService.getSettings();
}
@NgModule({
  imports: [CommonModule,
ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configLoaderFactory
    })],
  declarations: [HeaderComponent, UniverseComponent, TrackScrollDirective],
  exports: [UniverseComponent, HeaderComponent],
  providers: [
    {
        provide: HeaderConfig,
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
