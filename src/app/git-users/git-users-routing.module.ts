import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersComponent } from './git-users.component';
const gitUsersRoutes: Routes = [
  { path: 'git-users', component: GitUsersComponent }
];
@NgModule({
  imports: [RouterModule.forChild(gitUsersRoutes)],
  exports: [RouterModule]
})

export class GitUsersRoutingModule {}
