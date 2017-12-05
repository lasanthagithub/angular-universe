import { IUniverseConfigurationService } from "./iuniverse.configuration.service";
import { Observable } from "rxjs/Observable";
import { UniverseConfig } from "@workspace-demo/app-universe/src/model/universe.config";
import { Injectable } from "@angular/core";

@Injectable()
export class UniverseConfigurationService implements IUniverseConfigurationService {
    getConfiguration() {
        const config: UniverseConfig = new UniverseConfig();
        return Observable.of(config).delay(3000);
    }
}