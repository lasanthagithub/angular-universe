import { Component, OnInit } from '@angular/core';
import { UniverseConfig } from '../../model/universe.config';
import { UniverseConfigurationService } from '@workspace-demo/app-universe/src/services/universe.configuration.service';
import { UniverseState } from '@workspace-demo/app-universe/src/state/universe.state';
import { Store } from '@ngrx/store';
import { UniverseConfigQuery } from '@workspace-demo/app-universe/src/state/universe.loader/universe.loader.query';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {
  config: Observable<UniverseConfig>;
  constructor(store: Store<UniverseState>) {
      this.config = store.select(UniverseConfigQuery.getConfig);
  }

  ngOnInit() {}
}
