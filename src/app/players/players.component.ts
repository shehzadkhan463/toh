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
        delete players.players[0].name;
        console.log(players);
      },
      error => console.log('Error: ' + error)
    );
  }
  getPlayersWithSelectedDatails(arrayName, key) {
    // function removeKeys(obj, keysToDelete) {
    //   Object.keys(obj).forEach(function(key) {
    //   if((obj[key] && typeof obj[key] === 'object' && !(obj[key] instanceof Array))){
    //    removeEmpty(obj[key], keysToDelete);
    //   } else if ((key === keysToDelete)) {
    //         delete obj[key];
    //     }
    //   });
    //   return obj;
    // };
  }
  removeKeys(obj, keysToDelete) {
    Object.keys(obj).forEach(function(key) {
      if ((obj[key] && typeof obj[key] === 'object' && !(obj[key] instanceof Array ))) {
        // removeEmpty(obj[key], keysToDelete);//
      } else if ((key === keysToDelete)) {
              delete obj[key];
          }
    });
    return obj;
  }
  ngOnInit() {
    this.getPlayers();
  }

}
