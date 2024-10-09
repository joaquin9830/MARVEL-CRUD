import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  characters: any[] = [];  // Array para almacenar los personajes
  selectedCharacter: any = null;  // Para almacenar el personaje seleccionado en la edición

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  // Carga los personajes desde la API de Marvel o desde el localStorage
  loadCharacters(): void {
    this.marvelService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data.data.results;
      },
      (error: any) => {
        console.error('Error al obtener personajes', error);
        this.characters = this.marvelService.getLocalCharacters();  // Si falla la API, carga desde el localStorage
      }
    );
  }

  // Método para agregar un personaje
  addCharacter(character: any): void {
    this.marvelService.addLocalCharacter(character);
    this.loadCharacters();  // Recarga la lista de personajes
  }

  // Método para eliminar un personaje
  deleteCharacter(id: number): void {
    this.marvelService.deleteLocalCharacter(id);
    this.loadCharacters();  // Recarga la lista de personajes
  }

  // Método para seleccionar un personaje y abrir el formulario de edición
  editCharacter(character: any): void {
    this.selectedCharacter = { ...character };  
  }

  // Método para actualizar el personaje editado
  updateCharacter(updatedCharacter: any): void {
    this.marvelService.updateLocalCharacter(updatedCharacter);
    this.loadCharacters();  // Recarga la lista de personajes
    this.selectedCharacter = null;  // Cierra el formulario de edición    
  }

  // Método para cancelar la edición
  cancelEdit(): void {
    this.selectedCharacter = null;
  }
}
