import { Action } from '@ngrx/store';
import { UniverseConfig } from './../../model/universe.config';

export enum UniverseLoaderActionTypes {
    InitiateUniverseLoader = '[Universe Loader] Initiate Universe Load Listening Process',
    LoadUniverseConfig = '[Universe Loader] Load Universe Config',
    SetUniverseConfigLoaded = '[Universe Loader] Universe Config Loaded',
    FinishUniverseLoader = '[Universe Loader] Universe Loader Finished'
}

export class InitiateUniverseLoader implements Action {
    readonly type = UniverseLoaderActionTypes.InitiateUniverseLoader;
    constructor() {}
}

export class LoadUniverseConfig implements Action {
    readonly type = UniverseLoaderActionTypes.LoadUniverseConfig;
    constructor() {}
}

export class SetUniverseConfigLoaded implements Action {
    readonly type = UniverseLoaderActionTypes.SetUniverseConfigLoaded;
    constructor(public payload: UniverseConfig) {}
}

export class FinishUniverseLoader implements Action {
    readonly type = UniverseLoaderActionTypes.FinishUniverseLoader;
    constructor() {}
}

export type UniverseLoaderActions = InitiateUniverseLoader | LoadUniverseConfig
             | SetUniverseConfigLoaded | FinishUniverseLoader;