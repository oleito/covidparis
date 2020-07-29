import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dataService: DataService) { }

  logIn(username, password) {
    let req = {
      data: {
        user_username: username,
        user_password: password
      }
    }
    return this.dataService.postData('login', req);

  }
}
