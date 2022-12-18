import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, from, Observable, of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

import { DATA } from 'src/app/modules/cards/cards.data';
import { Card } from 'src/app/modules/cards/cards.type';
import { AppRoutes } from 'src/app/shared/routes';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _idCounter: number;
  private _url: string;

  constructor(private _http: HttpClient) {
    this._idCounter = 0;
    this._url = `/${AppRoutes.Cards}`;
  }

  getCard(id: number): Observable<Card>{
    return (id > 0) ? this._http.get<Card>(`${this._url}/${id}`) : of(new Card());
  }

  getCardArray(): Observable<Card[]> {
    return this._http.get<Card[]>(this._url).pipe(
      tap((array) => this.setIdCounter(array))
    );
  }

  add(card: Card): Observable<Card> {
    card.id = ++this._idCounter;
    return this._http.post<Card>(this._url, card);
  }

  update(card: Card): Observable<void> {
    return this._http.put<void>(`${this._url}/${card.id}`, card);
  }

  delete(cardId: number): Observable<void> {
    return this._http.delete<void>(`${this._url}/${cardId}`);
  }

  resetCards(cardArray: Card[]): Observable<any> {
    return concat(
      this.deleteCards(cardArray),
      this.uploadCards()
    );
  }

  private resetIdCounter(): void {
    this._idCounter = 0;
  }

  private deleteCards(cardArray: Card[]): Observable<void> {
    this.resetIdCounter();
    return from(cardArray).pipe(
      concatMap(val => this.delete(val.id))
    );
  }

  private uploadCards(): Observable<Card> {
    return from(DATA).pipe(
      concatMap(val => this.add(val))
    );
  }

  private setIdCounter(array: Card[]): void {
    this._idCounter = array[array.length - 1].id;
  }
}
