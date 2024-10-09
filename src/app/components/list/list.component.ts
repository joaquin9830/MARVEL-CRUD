import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  characters: any[] = [];  // Array para almacenar los personajes

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

  // Método para agregar un personaje a la lista
  addCharacter(character: any): void {
    this.marvelService.addLocalCharacter(character);
    this.loadCharacters();  // Recarga la lista de personajes
  }

  // Método para eliminar un personaje
  deleteCharacter(id: number): void {
    this.marvelService.deleteLocalCharacter(id);
    this.loadCharacters();  // Recarga la lista de personajes
  }

  // Método para actualizar un personaje (puedes implementar un formulario para editar)
  updateCharacter(updatedCharacter: any): void {
    this.marvelService.updateLocalCharacter(updatedCharacter);
    this.loadCharacters();  // Recarga la lista de personajes
  }
}
