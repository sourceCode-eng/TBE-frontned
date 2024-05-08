import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte';
import { CompteService } from '../service/compte.service';

@Component({
  selector: 'app-compte-list',
  standalone: true,
  imports: [],
  templateUrl: './compte-list.component.html',
  styleUrl: './compte-list.component.scss'
})

export class CompteListComponent implements OnInit {
  comptes: Compte[] = [];

  constructor(private compteservice: CompteService) {}

  ngOnInit(): void {
    this.compteservice.AfficherCompte().subscribe(data => {
      this.comptes = data;
    });
  }

  supprimerCompte(id: number): void {
    this.compteservice.SupprimerCompte(id).subscribe(() => {
      this.comptes = this.comptes.filter(compte => compte.id !== id);
    }, error => {
      console.error('Erreur lors de la suppression du compte:', error);
    });
  }
}
