import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public AfficherClients(): Observable<Client[]> {
    return this.http.get<Client[]>(
      'http://localhost:8080/bank/Clients/listAll'
    );
  }

  public SupprimerClient(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/bank/Clients/supprimer/${id}`
    );
  }
}
