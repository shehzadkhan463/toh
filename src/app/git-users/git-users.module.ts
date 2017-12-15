import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitUsersComponent } from './git-users.component';
import { GitUsersService } from './git-users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GitUsersComponent],
  providers: [GitUsersService]
})
export class GitUsersModule { }
