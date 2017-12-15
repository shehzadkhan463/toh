import { Component, OnInit } from '@angular/core';
import { Players } from './players.interface';
import { PlayersService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {
  playersArray: Players[];
  constructor( private playersService: PlayersService ) {  }
  getPlayers(): void {
    this.playersService.getPlayers()
      .subscribe( players => {
        this.playersArray = players;
      },
      error => console.log('Error: ' + error)
    );
  }
  ngOnInit() {
    this.getPlayers();
  }

}
