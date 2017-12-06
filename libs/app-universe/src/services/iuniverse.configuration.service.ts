import { Observable } from "rxjs/Observable";
import { UniverseConfig } from "@workspace-demo/app-universe/src/model/universe.config";

export interface IUniverseConfigurationService {
    getConfiguration(): Observable<any>;
}