import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { MessageService } from './messages/message.service';
import { Observable } from 'rxJs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { InMemoryDataService } from '../in-memory-data-service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor( private http: HttpClient, private messageService: MessageService) { }
  getHeroes (): Observable<Hero[]> {

    console.log(this.http.get(this.heroesUrl));
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id = ${id}`)),
      catchError(this.handleError<Hero> ( `getHero id = ${id}`))
    );
  }
  private log (message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  /*
   * Handle Http Operation that failed
   * Let the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T>( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
