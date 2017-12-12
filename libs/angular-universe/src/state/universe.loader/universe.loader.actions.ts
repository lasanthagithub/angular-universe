import { Action } from '@ngrx/store';
import { UniverseConfig } from './../../model/universe.config';

export enum UniverseLoaderActionTypes {
    InitiateUniverseLoader = <any> '[Universe Loader] Initiate Universe Load Listening Process',
    LoadUniverseConfig = <any> '[Universe Loader] Load Universe Config',
    SetUniverseConfigLoaded = <any> '[Universe Loader] Universe Config Loaded',
    FinishUniverseLoader = <any> '[Universe Loader] Universe Loader Finished'
}

export class InitiateUniverseLoader implements Action {
    readonly type =  UniverseLoaderActionTypes.InitiateUniverseLoader + "";
    constructor(public payload = null) {}
}

export class LoadUniverseConfig implements Action {
    readonly type = UniverseLoaderActionTypes.LoadUniverseConfig + "";
    constructor(public payload = null) {}
}

export class SetUniverseConfigLoaded implements Action {
    readonly type = UniverseLoaderActionTypes.SetUniverseConfigLoaded + "";
    constructor(public payload: UniverseConfig) {}
}

export class FinishUniverseLoader implements Action {
    readonly type = UniverseLoaderActionTypes.FinishUniverseLoader + "";
    constructor(public payload = null) {}
}

export type UniverseLoaderActions = InitiateUniverseLoader | LoadUniverseConfig
             | SetUniverseConfigLoaded | FinishUniverseLoader;