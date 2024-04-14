import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../interface/carta';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  searchSet: string = '';
  responseData!: Carta;

  constructor(private http: HttpClient) {}

  fetchData(): Observable<Carta> {
    return this.http.get<Carta>(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${this.searchSet}&num=10&offset=0`
    );
  }
}
