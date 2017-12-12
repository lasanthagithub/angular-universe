import { Component, OnInit } from '@angular/core';
import { UniverseConfig } from '../../model/universe.config';
import { UniverseState } from './../../state/universe.state';
import { Store } from '@ngrx/store';
import { UniverseConfigQuery } from './../../state/universe.loader/universe.loader.query';
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
