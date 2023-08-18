import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class DonneepersoService {

  userDataUrl: string = 'http://localhost:8080/userdata';
  deleteUserUrl: string = 'http://localhost:8080/delete';
  modifyUserUrl: string = 'http://localhost:8080/update';

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User> {
    let headers;
    
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token };
      
      }

    return this.httpClient.get<User>(this.userDataUrl, { headers });
    
  }

  deleteUser(): Observable<User> {

    let headers;

    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token };
      
      }

     return this.httpClient.delete<User>(this.deleteUserUrl, { headers });

  }

  modifyUser(user: User): Observable<User> {

    let headers;

    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token };
      
      }

    return this.httpClient.put<User>(this.modifyUserUrl, user, { headers });
  }
}
