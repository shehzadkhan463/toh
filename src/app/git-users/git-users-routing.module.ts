import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersComponent } from './git-users.component';
import { GitUsersService } from './git-users.service';
const gitUsersRoutes: Routes = [
  { path: '', redirectTo: 'git-users', pathMatch: 'full' },
  { path: 'git-users', component: GitUsersComponent }
];
@NgModule({
  imports: [RouterModule.forChild(gitUsersRoutes)],
  exports: [RouterModule],
  providers: [GitUsersService]
})

export class GitUsersRoutingModule {}
