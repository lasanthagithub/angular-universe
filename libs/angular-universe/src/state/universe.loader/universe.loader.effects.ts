import { Injectable, Inject } from '@angular/core';
import { OnRunEffects, Actions, EffectNotification, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { UniverseLoaderActionTypes, SetUniverseConfigLoaded } from './universe.loader.actions';
import { UniverseConfig } from './../../model/universe.config';
import { IUniverseConfigurationService } from './../../services/iuniverse.configuration.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class UniverseLoaderEffects implements OnRunEffects {
    
    @Effect() getUniverseConfiguration = this.actions
        .ofType(UniverseLoaderActionTypes.LoadUniverseConfig+"")
        .switchMap(() =>  this.configService.getConfiguration())
        .map((universeConfig) => { 
            return new SetUniverseConfigLoaded(universeConfig);
    });
    
    ngrxOnRunEffects(resolveEffects: Observable<EffectNotification>) {
        return this.actions.ofType(UniverseLoaderActionTypes.InitiateUniverseLoader + "")
            .exhaustMap(() => resolveEffects.takeUntil(
                this.actions.ofType(UniverseLoaderActionTypes.FinishUniverseLoader + "")
            ));
    }

    constructor(public actions: Actions, 
            @Inject("UniverseConfigurationService") public configService: IUniverseConfigurationService) {
       
    }
}
