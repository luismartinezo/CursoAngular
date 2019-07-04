import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';
import { User } from '../models/user';
import { Observable } from 'rxjs';
// jqury
declare let $:any;

@Component({
  selector: 'app-hc',
  templateUrl: './hc.component.html'
  // styleUrls: ['./hc.component.css']
})
export class HcComponent implements OnInit {
  PHP_API_SERVER = 'https://jsonplaceholder.typicode.com';
  name: string;
  posts: any[];

  constructor(private http: HttpClient) {
    this.name = 'Luis';
  }

  ngOnInit() {
    $('#logo').click( function (e) {
      e.preventDefault();
      $('header').css('background', 'yellow').css('height', '150px');
    });
  }

  readUser(user: User): Observable<User[]>{
    return this.http.post<User[]>(`${this.PHP_API_SERVER}/posts`, user);
  }
}
