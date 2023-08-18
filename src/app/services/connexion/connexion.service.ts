import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Inscription } from 'src/app/entities/inscription';
import { Token } from 'src/app/entities/token';
import { User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  connexionUrl: string = 'http://localhost:8080/users';
  loginUrl: string = 'http://localhost:8080/token';


  constructor(private httpClient: HttpClient) { }

  logUser(user: User): Observable<Token> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Basic ' + btoa(`${user.userName}:${user.password}`)
      })
    };

    return this.httpClient.post<Token>(this.loginUrl, { userName: user.userName, password: user.password}, httpOptions);
  }

  createUser(user: Inscription): Observable<Inscription>  {
    return this.httpClient.post<Inscription>(this.connexionUrl, user)
    
      
  }
  
  getUsers(): Observable<User[]> {
    
	  return this.httpClient.get<User[]>(this.connexionUrl);
  }

  
}
