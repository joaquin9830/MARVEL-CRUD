import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent {
  @Input() character: any;  // Recibir personaje seleccionado
  @Output() close = new EventEmitter<void>();  // Evento para cerrar detalles

  closeDetail(): void {
    this.close.emit();  // Emitir evento para cerrar la vista de detalles
  }
}
