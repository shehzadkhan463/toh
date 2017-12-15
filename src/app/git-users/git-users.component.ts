import { Component, OnInit } from '@angular/core';
import { GitUsersService } from './git-users.service';
@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  gitUsers = gitUsers[];
  constructor( private gitUsersService: GitUsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.gitUsers = this.gitUsersService.getUsers();
  }
}
