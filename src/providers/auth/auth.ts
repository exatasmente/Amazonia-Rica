import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthProvider {

  constructor(public http: Http) {

  }
  login(userData) {
    var promise = new Promise((resolve, reject) => {
      this.http.get("url").subscribe((resp) => {
        resolve(true);

        reject(false);
      });
    });


    return promise;
  }
  getEmail(email) {
    var promise = new Promise((resolve, reject) => {
      this.http.get("url").subscribe((resp) => {
        resolve();

        reject(false);
      });
    });


    return promise;
  }
  signup(userData) {
    var promise = new Promise((resolve, reject) => {
      this.http.get("url").subscribe((resp) => {
        resolve(true);

        reject(false);
      });
    });
    return promise;
  }
   
}
