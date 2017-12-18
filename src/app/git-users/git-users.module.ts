import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GitUsersComponent } from './git-users.component';
import { GitUsersService } from './git-users.service';
import { GitUsersRoutingModule } from './git-users-routing.module';


@NgModule({
  imports: [
    CommonModule, HttpClientModule, GitUsersRoutingModule
  ],
  declarations: [GitUsersComponent],
  providers: [GitUsersService]
})
export class GitUsersModule { }
