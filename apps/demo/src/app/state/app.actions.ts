import { Action } from '@ngrx/store';
import { AppState } from './app.state';
export enum AppActionTypes {
    TestAppStore = <any> '[APP] Test Store',
    TestAppStoreWithPayload = <any> '[APP] Test Store With Payload',
    TestAppStoreWithEffect = <any> '[APP] Test Store With Effect',
    TestAppStoreWithOtherEffect = <any> '[APP] Test Store With Effect',
    TestAppStoreWithEffectFinish = <any> '[APP] Test Store With Effect Response'
}

export class TestAppStore implements Action {
    readonly type =  AppActionTypes.TestAppStore + "";
    constructor(public payload = null) {}
}
export class TestAppStoreWithPayload implements Action {
    readonly type =  AppActionTypes.TestAppStoreWithPayload + "";
    constructor(public payload: string) {}
}

export class TestAppStoreWithEffect implements Action {
    readonly type =  AppActionTypes.TestAppStoreWithEffect + "";
    constructor(public payload = null) {}
}
export class TestAppStoreWithOtherEffect implements Action {
    readonly type =  AppActionTypes.TestAppStoreWithOtherEffect + "";
    constructor(public payload = null) {}
}
export class TestAppStoreWithEffectFinish implements Action {
    readonly type =  AppActionTypes.TestAppStoreWithEffectFinish + "";
    constructor(public payload: string) {}
}

export type AppActions = TestAppStore | TestAppStoreWithPayload | TestAppStoreWithEffect | TestAppStoreWithEffectFinish | TestAppStoreWithOtherEffect;