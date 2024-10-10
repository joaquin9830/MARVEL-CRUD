import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  characters: any[] = [];  // Lista de personajes
  selectedCharacter: any = null;  // Personaje seleccionado para edición o creación

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  // Cargar personajes de la API de Marvel
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

  // Guardar personaje
  saveCharacter(character: any): void {
    if (character.id) {
      // Actualizar personaje
      const index = this.characters.findIndex(c => c.id === character.id);
      if (index !== -1) this.characters[index] = character;
    } else {
      // Agregar nuevo personaje
      character.id = this.characters.length + 1; // Simulación de ID
      this.characters.push(character);
    }
    this.selectedCharacter = null;
  }

  // Cancelar edición
  cancelEdit(): void {
    this.selectedCharacter = null;
  }

  // Editar personaje
  editCharacter(character: any): void {
    this.selectedCharacter = { ...character };  // Clonar objeto para editar
  }

  // Eliminar personaje
  deleteCharacter(character: any): void {
    this.characters = this.characters.filter(c => c.id !== character.id);
  }
}
