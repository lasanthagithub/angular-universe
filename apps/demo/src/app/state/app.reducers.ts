import { AppState } from "apps/demo/src/app/state/app.state"; 
import { ActionReducerMap } from '@ngrx/store'
import { AppActions, AppActionTypes } from "./app.actions";

export function appReducer(state: string = "Initial Value", action: AppActions){
    switch(action.type){
        case AppActionTypes.TestAppStore + "": {
            return { ...action.payload };
        }
        case AppActionTypes.TestAppStoreWithPayload + "": {
            return action.payload;
        }
        case AppActionTypes.TestAppStoreWithEffectFinish + "": {
            return action.payload;
        }
        default: { 
            return state; 
        }
    }
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    test: appReducer
};