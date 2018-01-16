import { Component, OnInit } from '@angular/core';
import { GitUsersService } from './git-users.service';
import { GitUsers } from './git-users.interface';
@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css'],
  providers: [GitUsersService]
})
export class GitUsersComponent implements OnInit {
  gitUsersArray: GitUsers[];
  constructor( private gitUsersService: GitUsersService) { }
  getUsers(): void {
    this.gitUsersService.getUsers()
      .subscribe(gitUsers => {
        this.gitUsersArray = gitUsers;
        console.log(gitUsers[0]);
        delete gitUsers[0].avatar_url;
        console.log(gitUsers[0]);
      },
      error => console.log('Error: ' + error)
    );
  }
  ngOnInit() {
    this.getUsers();
  }
}
