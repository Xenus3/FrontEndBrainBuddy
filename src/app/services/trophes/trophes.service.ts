import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trophee } from 'src/app/entities/trophee';

@Injectable({
  providedIn: 'root'
})
export class TrophesService {

  userHistoryUrl: string = 'http://localhost:8080/usertrophies';

  constructor(private httpClient: HttpClient) { }

  getUserTrophies(): Observable<Trophee[]> {
    let headers;
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token }
      
      }

    return this.httpClient.get<Trophee[]>(this.userHistoryUrl, { headers });
    
  }
}
