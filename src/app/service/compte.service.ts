import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  constructor(private http: HttpClient) {}

  public AfficherCompte(): Observable<Compte[]> {
    return this.http.get<Compte[]>(
      'http://localhost:8080/bank/comptes/listAll'
    );
  }

  public SupprimerCompte(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/bank/comptes/supprimer/${id}`
    );
  }
}
