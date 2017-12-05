import { UniverseConfig } from './../../model/universe.config';
import { UniverseLoaderActionTypes, UniverseLoaderActions } from './universe.loader.actions';
export function universeConfigLoaderReducer(state: UniverseConfig = null,
            action: UniverseLoaderActions ): UniverseConfig {
    switch(action.type) {
        case UniverseLoaderActionTypes.SetUniverseConfigLoaded: {
            return { ... action.payload }
        }
        default: {
            return state;
        }
    }
}