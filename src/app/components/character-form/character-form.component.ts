import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  // El personaje que se editará será recibido desde el componente padre
  @Input() character: any;

  // Emitimos un evento cuando se guarda o cancela la edición
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  // Método para guardar el personaje editado
  onSave() {
    this.save.emit(this.character);
  }

  // Método para cancelar la edición
  onCancel() {
    this.cancel.emit();
  }
}
