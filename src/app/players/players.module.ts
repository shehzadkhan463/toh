import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersService } from './player.service';

@NgModule({
  imports: [
    CommonModule, PlayersRoutingModule, HttpModule
  ],
  declarations: [PlayersComponent],
  providers: [PlayersService]
})
export class PlayersModule { }
