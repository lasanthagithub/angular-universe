import { Action } from '@ngrx/store';
import { UniverseConfig } from './../model/universe.config';
import { UniverseLoaderActions } from './universe.loader/universe.loader.actions';
export enum UniverseActionTypes {
    ActionTester = <any> '[Universe] Action Tester'
}

export class ActionTester implements Action {
    readonly type =  UniverseActionTypes.ActionTester + "";
    constructor(public payload = null) {}
}

export type UniverseActions = ActionTester | UniverseLoaderActions;