import { Component, OnInit } from '@angular/core';
import { WorkspaceConfig } from 'libs/workspace/src/model/workspace-config';
import { WidgetConfig } from 'libs/workspace/src/model/widget-config';
import { DataProviderService } from '../../services/data-provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: WorkspaceConfig;
  constructor(private http: HttpClient,
                public dataProvider: DataProviderService) {
  }

  ngOnInit() {
    const config: WorkspaceConfig = new WorkspaceConfig();
    config.addWidget(require('./../../config/by-continent').config);
    config.addWidget(require('./../../config/by-country').config);
    config.addWidget(require('./../../config/by-lastName').config);
    config.addWidget(require('./../../config/by-language').config);
    this.config = config;
    const dt = this.dataProvider.createRowData(10000);
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      config.data.next({
        id: 'BY_COUNTRY',
        data: dt
      });
    config.data.next({
        id: 'BY_CONTINENT',
        data: dt
      });
    config.data.next({
        id: 'BY_LAST_NAME',
        data: dt
      });
    config.data.next({
        id: 'BY_LANGUAGE',
        data: dt
      });
    });
  }
}
