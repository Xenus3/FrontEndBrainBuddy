import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trophee } from 'src/app/entities/trophee';
import { Usertrophee } from 'src/app/entities/usertrophee';

@Injectable({
  providedIn: 'root'
})
export class TrophesService {

  userHistoryUrl: string = 'http://localhost:8080/usertrophies';

  constructor(private httpClient: HttpClient) { }

  getUserTrophies(): Observable<Usertrophee[]> {
    let headers;
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token }
      
      }

    return this.httpClient.get<Usertrophee[]>(this.userHistoryUrl, { headers });
    
  }
}
