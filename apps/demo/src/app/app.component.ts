import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import RefData from './ref-data';

import { WorkspaceConfig } from 'libs/workspace/src/model/workspace-config';
import { WidgetConfig } from 'libs/workspace/src/model/widget-config';
import { Random } from './random';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: WorkspaceConfig;
  random: Random;
  constructor(private http: HttpClient) {
    this.random = new Random(120);
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

    for (let i = 0; i < 10000; i++) {
      this.random = new Random(this.random.nextInt32([500, 99999]));

      const countryData = this.getRandom(RefData.countries);
      // RefData.countries[i % RefData.countries.length];

      rowData.push({
        firstName: this.getRandom(RefData.firstNames),
        lastName: this.getRandom(RefData.lastNames),
        skills: {
          android: Math.random() < 0.4,
          html5: Math.random() < 0.4,
          mac: Math.random() < 0.4,
          windows: Math.random() < 0.4,
          css: Math.random() < 0.4
        },
        gender: this.getRandom(RefData.GENDER),
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
    console.log('finished collecting data');
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

  getRandom(list: any[]) {
    // const newList = this.buildNewList(list);
    const newList = list;
    const min = 0;
    const max = newList.length;

    const randomIndex = this.random.nextInt32([min, max]);
    if (randomIndex >= newList.length) {
      return this.getRandom(newList);
    }
    return newList[randomIndex];
  }

  buildNewList(list) {
    const newList: any[] = new Array(list.length * 10);
    const min = 0;
    const max = list.length;

    for (let i = 0; i < newList.length; i++) {
      const randomIndex = this.random.nextInt32([min, max]);
      newList[i] = list[randomIndex];
    }
    return newList;
  }
}
