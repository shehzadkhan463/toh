import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'players',
    loadChildren: 'app/players/players.module#PlayersModule'
  },
  {
    path: 'git-users',
    loadChildren: 'app/git-users/git-users.module#GitUsersModule'
  },
  {
    path: 'toh',
    loadChildren: 'app/toh/toh.module#TohModule'
  },
  {
    path: 'employee',
    loadChildren: 'app/employee/employee.module#EmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
