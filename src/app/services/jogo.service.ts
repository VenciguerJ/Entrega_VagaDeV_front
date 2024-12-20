import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo.model';
import { Resultados } from '../models/Resultados';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  private apiUrl = 'http://localhost:5057/API'; // URL do backend, deve ser somente esta URL a ser consumida quando a api estiver sendo executada.

  constructor(private http: HttpClient) {}


  throwPoints(jogo: Jogo): Observable<any> {
    return this.http.post(`${this.apiUrl}/throwpoints`, jogo);
  }

  getResultados(): Observable<Resultados> {
    return this.http.get<Resultados>(`${this.apiUrl}/consult`);
  }
}