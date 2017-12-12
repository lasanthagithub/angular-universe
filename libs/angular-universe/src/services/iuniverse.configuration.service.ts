import { Observable } from "rxjs/Observable";
import { UniverseConfig } from "./../model/universe.config";

export interface IUniverseConfigurationService {
    getConfiguration(): Observable<any>;
}