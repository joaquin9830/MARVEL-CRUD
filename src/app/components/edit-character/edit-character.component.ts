import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrl: './edit-character.component.css'
})
export class EditCharacterComponent {
  //Binding de propiedades
  @Input() character: any;
  //Binding de eventos
  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  //Método para emitir el evento de actualización
  onSubmit() {
    this.update.emit(this.character);
  }

  //Método para emitir el evento de cancelación
  cancelEdit() {
    this.cancel.emit();
  }
}
