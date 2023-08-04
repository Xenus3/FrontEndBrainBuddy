import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/entities/score';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  userHistoryUrl: string = 'http://localhost:8080/userhistory';

  constructor(private httpClient: HttpClient) { }

  getUserHistory(): Observable<Score[]> {
    let headers;
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token }
      
      }

    return this.httpClient.get<Score[]>(this.userHistoryUrl, { headers });
    
  }
}
