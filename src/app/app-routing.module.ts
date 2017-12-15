import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  {
    path: 'players',
    loadChildren: 'app/players/players.module#PlayersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
