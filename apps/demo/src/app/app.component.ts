import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { TestAppStore, TestAppStoreWithPayload, TestAppStoreWithEffect } from './state/app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(store: Store<AppState>) {
    setTimeout(()=> {
      const testAction: TestAppStore  = new TestAppStore();
      store.dispatch(testAction);
  
      const testActionWithPayload: TestAppStoreWithPayload  = new TestAppStoreWithPayload("From Component to reducer");
      store.dispatch(testActionWithPayload);

      const testActionWithEffect: TestAppStoreWithEffect  = new TestAppStoreWithEffect();
      store.dispatch(testActionWithEffect);

    }, 2000);
  }

  ngOnInit() {}
}
