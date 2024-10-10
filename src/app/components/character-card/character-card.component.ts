import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  // El personaje será recibido desde el componente padre (ListComponent)
  @Input() character: any;

  // Eventos para editar y eliminar el personaje
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  // Método que emite el evento para editar
  onEdit() {
    this.edit.emit(this.character);
  }

  // Método que emite el evento para eliminar
  onDelete() {
    this.delete.emit(this.character.id);
  }
}
