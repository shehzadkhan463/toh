import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Observable';
import { GitUsers } from './git-users.interface';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
@Injectable()
export class GitUsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {

    return this.http.get('https://api.github.com/users')
    .catch(this.handleError);
  }
  handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
