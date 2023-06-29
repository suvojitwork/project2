import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  //save in localStorage
  setData(fname: string, lname: string, mail: string, token: string) {
    window.localStorage.setItem('f_name', fname);
    window.localStorage.setItem('l_name', lname);
    window.localStorage.setItem('email', mail);
    window.sessionStorage.setItem('token', token);
  }

  //fetch from local storage

  getData() {
    const saveData = [];
    let data = {
      first_name: window.localStorage.getItem('f_name'),
      last_name: window.localStorage.getItem('l_name'),
      emil: window.localStorage.getItem('email'),
    };
    saveData.push(data);
    return saveData;
  }

  //fetch token from storage
  getToken() {
    return window.sessionStorage.getItem('token');
  }

  //delete data from storage
  getDestroy() {
    return window.sessionStorage.clear;
  }

  constructor() {}
}
