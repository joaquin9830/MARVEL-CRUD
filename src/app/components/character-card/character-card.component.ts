import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() showInfo = new EventEmitter<any>(); // Emitir evento para mostrar detalles

  onEdit(): void {
    this.edit.emit(this.character);
  }

  onDelete(): void {
    this.delete.emit(this.character);
  }

  onShowInfo(): void {
    this.showInfo.emit(this.character); // Emitir personaje para mostrar detalles
  }
}
