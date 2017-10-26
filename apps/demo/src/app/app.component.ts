import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import RefData from './ref-data';

import { WorkspaceConfig } from 'libs/workspace/src/model/workspace-config';
import { WidgetConfig } from 'libs/workspace/src/model/widget-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: WorkspaceConfig;
  constructor(private http: HttpClient) {
    

  }

  ngOnInit() {
    const config: WorkspaceConfig = new WorkspaceConfig();
    config.addWidget(require('./config/by-country').config);
    this.config = config;
    const dt = this.createRowData();
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
        console.log(data);
        config.data.next({
            id: 'BY_COUNTRY',
            data: dt
        });
    });

  }

  private createRowData() {
        const rowData: any[] = [];

        for (let i = 0; i < 200; i++) {
            const countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                dob: RefData.DOBs[i % RefData.DOBs.length],
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }

        return rowData;
    }

       private createRandomPhoneNumber() {
        let result = '+';
        for (let i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }
}
