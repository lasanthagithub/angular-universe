import { AppState } from "apps/demo/src/app/state/app.state"; 
import { ActionReducerMap } from '@ngrx/store'
export function appReducer(state: AppState = null, action: any){
    switch(action.type){
        default: { return state; }
    }
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    
};