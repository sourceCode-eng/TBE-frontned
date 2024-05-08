import { Component, OnInit } from '@angular/core';
import { Operation } from '../model/operation';
import { OperationService } from '../service/operation.service';

@Component({
  selector: 'app-operation-list',
  standalone: true,
  imports: [],
  templateUrl: './operation-list.component.html',
  styleUrl: './operation-list.component.scss'
})
export class OperationListComponent implements OnInit{
  operations: Operation[] = [];

  constructor(private operationService: OperationService) {}

  ngOnInit(): void {
    this.operationService.AfficherOperation().subscribe(data => {
      this.operations = data;
    });
  }

  supprimerOperation(id: number): void {
    this.operationService.SupprimerOperation(id).subscribe(() => {
      this.operations = this.operations.filter(Operation => Operation.id !== id);
    }, error => {
      console.error('Erreur lors de la suppression de l\'operation:', error);
    });
  }
}
