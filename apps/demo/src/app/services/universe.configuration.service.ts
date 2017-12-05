import { IUniverseConfigurationService } from "libs/app-universe/src/services/iuniverse.configuration.service";
import { Observable } from "rxjs/Observable";
import { UniverseConfig } from "libs/app-universe/src/model/universe.config";
import { HeaderConfig } from "libs/app-universe/src/model/configs";
import { Injectable } from "@angular/core";

export class UniverseAppConfigService implements IUniverseConfigurationService {
    getConfiguration() :Observable<UniverseConfig> {
        const configJson: UniverseConfig = <UniverseConfig> require('./../app-config/config.json');
        return Observable.of(configJson).delay(3000);
    }
}