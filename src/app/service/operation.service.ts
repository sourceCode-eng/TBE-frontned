import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../model/operation';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private http: HttpClient) {}

  public AfficherOperation(): Observable<Operation[]> {
    return this.http.get<Operation[]>(
      'http://localhost:8080/bank/operation/listAll'
    );
  }

  public SupprimerOperation(id: number): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/bank/operation/supprimer/${id}`
    );
  }
//   public Ajoutercompte(id: number): Observable<any> {
//     return this.http.post<Operation>(
//       `http://localhost:8080/bank/operation/enregistrer/${id}`
//     );
//   }
}
