import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AppActionTypes, TestAppStoreWithEffectFinish } from './app.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class AppEffectOtherTest {
    
    @Effect() getAppEffectTest = this.actions
        .ofType(AppActionTypes.TestAppStoreWithOtherEffect+"")
        .switchMap(() =>  Observable.of("Test Me From Other Effect").delay(4000))
        .map((val) => { 
            return new TestAppStoreWithEffectFinish(val);
    });

    constructor(public actions: Actions) {
       console.log(actions);
    }
}
