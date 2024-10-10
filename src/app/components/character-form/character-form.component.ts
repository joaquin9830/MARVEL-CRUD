import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  @Input() character: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  selectedImage: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      this.selectedImage = reader.result;
      this.character.thumbnail = {
        path: this.selectedImage,
        extension: '' 
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.save.emit(this.character);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
