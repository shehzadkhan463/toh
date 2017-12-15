import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayersService } from './player.service';

const playersRoutes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(playersRoutes)],
  exports: [RouterModule],
  providers: [PlayersService]
})
export class PlayersRoutingModule {}
