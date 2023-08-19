import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/entities/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  connexionUrl: string = 'http://localhost:8080/scores';

  constructor(private httpClient: HttpClient) { }

  createScore(score: Score): Observable<Score>  {

    let headers;
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      headers = { 'Authorization': 'Bearer '+token }
      
      }

    return this.httpClient.post<Score>(this.connexionUrl, score, { headers });
  }
  
  getScores(): Observable<Score[]> {
	  return this.httpClient.get<Score[]>(this.connexionUrl);
  }


}
