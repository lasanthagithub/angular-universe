import { Injectable } from '@angular/core';
import { Random } from './../random';
import RefData from './../ref-data';
import * as workerPath from "file-loader?name=[name].js!./worker";
import { Subject } from 'rxjs/Rx';

const worker = new Worker(workerPath);

@Injectable()
export class DataProviderService {
  random: Random;
  constructor() {
      
      
      // this.random = new Random(120);

      
        
  }

  public createRowData(numberOfRows: number) {
    const data = new Subject();
    worker.postMessage({numberOfRows: numberOfRows, result: null});
    worker.addEventListener('message', message => {  
        data.next(message.data);
    });
    return data;
    // const rowData: any[] = [];

    // for (let i = 0; i < numberOfRows; i++) {
      
    //   rowData.push(this.getRow(i));
    // }
    // console.log('finished collecting data');
    // return rowData;
  }
 private getRow(i) {
    this.random = new Random(this.random.nextInt32([i, 1000]));
      const firstName = this.getRandom(RefData.firstNames);
      const lastName = this.getRandom(RefData.lastNames);
      const countryData = this.getRandom(RefData.countries);
      // RefData.countries[i % RefData.countries.length];
    const row = {
        firstName: firstName,
        lastName: lastName,
        name: lastName + ', ' + firstName,
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
      };
    return row;
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
