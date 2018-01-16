import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Players } from './players.interface';
import { Observable } from 'rxJs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class PlayersService {
  constructor(private http: Http) {
  }
  getPlayers(): Observable<any> {
    return this.http
      .get('http://api.football-data.org/v1/teams/66/players')
      .map(( response: Response ) => {
        const responseData = <any>response.json();
        console.log(responseData);
        return responseData;
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
