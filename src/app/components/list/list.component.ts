import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  // Listado de personajes
  characters: any[] = [];
  selectedCharacter: any = null;
  detailedCharacter: any = null;  // Personaje seleccionado para detalles
  alertMessage: string = ''; // Mensaje de alerta

  //Inyectar el servicio de Marvel
  constructor(private marvelService: MarvelService) {}

  //Ciclo de vida de Angular para inicializar el componente
  ngOnInit(): void {
    this.loadCharacters();
  }

  //Método para cargar los personajes
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

  //Método para guardar personajes
  saveCharacter(character: any): void {
    // Si el personaje tiene un ID, se actualiza
    if (character.id) {
      const index = this.characters.findIndex(c => c.id === character.id);
      if (index !== -1) this.characters[index] = character;
      this.alertMessage = 'Personaje actualizado';
    // Si no tiene ID, se agrega a la lista
    } else {
      character.id = this.characters.length + 1;
      this.characters.push(character);
      this.alertMessage = 'Personaje agregado';
    }
    this.selectedCharacter = null;
  }

  //Cancelar edición
  cancelEdit(): void {
    this.selectedCharacter = null;
  }

  //Editar personaje
  editCharacter(character: any): void {
    this.selectedCharacter = { ...character };
  }

  //Eliminar personaje
  deleteCharacter(character: any): void {
    this.characters = this.characters.filter(c => c.id !== character.id);
    this.alertMessage = 'Personaje eliminado';
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
