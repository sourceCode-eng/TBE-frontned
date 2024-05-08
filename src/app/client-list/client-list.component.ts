import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit{
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.AfficherClients().subscribe(data => {
      this.clients = data;
    });
  }

  supprimerClient(id: number): void {
    this.clientService.SupprimerClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
    }, error => {
      console.error('Erreur lors de la suppression du client:', error);
    });
  }
}
