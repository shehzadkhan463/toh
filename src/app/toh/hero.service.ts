import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { of } from 'rxjs/observable/of';
import { MessageService } from './messages/message.service';
import { Observable } from 'rxJs/Rx';

@Injectable()
export class HeroService {

  constructor( private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }
}
