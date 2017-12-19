import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { MessageService } from './messages/message.service';
import { Observable } from 'rxJs/Rx';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor( private http: HttpClient, private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id ));
  // }
  private log (message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
