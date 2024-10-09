import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrl: './edit-character.component.css'
})
export class EditCharacterComponent {
  @Input() character: any;
  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit() {
    this.update.emit(this.character);
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
