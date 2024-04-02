import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CardModel from '../models/card-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  URL = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) { }

  public get(): Observable<CardModel[]> {
    return this.http.get<CardModel[]>(this.URL);
  }

  public getById(id: number): Observable<CardModel> {
    return this.http.get<CardModel>(this.URL + '/' + id);
  }

  public post(card: CardModel): Observable<CardModel> {
    return this.http.post<CardModel>(this.URL, card);
  }
}
