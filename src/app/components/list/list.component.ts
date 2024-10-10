import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  characters: any[] = [];
  selectedCharacter: any = null;
  detailedCharacter: any = null;  // Personaje seleccionado para detalles

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.marvelService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data.data.results;
      },
      (error: any) => {
        console.error('Error fetching characters', error);
      }
    );
  }

  saveCharacter(character: any): void {
    if (character.id) {
      const index = this.characters.findIndex(c => c.id === character.id);
      if (index !== -1) this.characters[index] = character;
    } else {
      character.id = this.characters.length + 1;
      this.characters.push(character);
    }
    this.selectedCharacter = null;
  }

  cancelEdit(): void {
    this.selectedCharacter = null;
  }

  editCharacter(character: any): void {
    this.selectedCharacter = { ...character };
  }

  deleteCharacter(character: any): void {
    this.characters = this.characters.filter(c => c.id !== character.id);
  }

  // Mostrar detalles del personaje seleccionado
  showCharacterDetail(character: any): void {
    this.detailedCharacter = character;
  }

  // Cerrar detalles del personaje
  closeCharacterDetail(): void {
    this.detailedCharacter = null;
  }
}
