import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../state/app.state';
import { AppStoreTestQuery } from './../../state/app.query';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testStore: Observable<string>;
  constructor(private http: HttpClient,
                public dataProvider: DataProviderService,
                store: Store<AppState>) {
              this.testStore = store.select(AppStoreTestQuery.getTest);
  }

  ngOnInit() {
    
  }
}
