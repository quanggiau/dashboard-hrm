import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /* Url create user */
  //private empUrl_check_login = 'http://192.168.4.202:8080/login';
  private empUrl_check_login = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }
   // sent user+password from client to server TO CHECK
   //  Observable<kieu du lieu>
  checkLogin (user): Observable<any>{      
    return this.http.post(`${this.empUrl_check_login}`,user);   //post all user//
  }
}

