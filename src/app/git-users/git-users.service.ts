import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Observable';
import { of } from 'rxjs/observable/of'
import { GitUsers } from './git-users.interface';
@Injectable()
export class GitUsersService {

  constructor() { }
  getUsers: Observable<GitUsers[]> {}
}
