import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://reqres.in/';
  }

  getUser() {
    return this.http.get(this.url + 'api/users/2');
  }

  getUserId(userId) {
    return this.http.get(this.url + 'api/users/' + userId);
  }
}
