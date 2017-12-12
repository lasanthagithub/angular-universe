import { ActionReducerMap } from "@ngrx/store";
import { UniverseConfig } from "./../model/universe.config";
import { UniverseState } from "./universe.state";
import { universeConfigLoaderReducer } from './universe.loader/universe.loader.reducer';

export const UNIVERSE_REDUCERS: ActionReducerMap<UniverseState> = {
    configuration: universeConfigLoaderReducer
}