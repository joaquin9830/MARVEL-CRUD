import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = '5844c6ba3b9f8ddc0302a7f47ff0d779';
  private privateKey = '92f81b16abffd686dd54461ea4dbd51ef8432a23';

  constructor(private http: HttpClient) {}

  private generateAuthParams() {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();
    return `ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;
  }

  getCharacters(): Observable<any> {
    const authParams = this.generateAuthParams();
    return this.http.get(`${this.baseUrl}/characters?${authParams}`);
  }

  getCharacter(id: number): Observable<any> {
    const authParams = this.generateAuthParams();
    return this.http.get(`${this.baseUrl}/characters/${id}?${authParams}`);
  }

  // Métodos para manejar personajes en el localStorage
  addLocalCharacter(character: any) {
    let characters = this.getLocalCharacters();
    characters.push(character);
    localStorage.setItem('localCharacters', JSON.stringify(characters));
  }

  getLocalCharacters(): any[] {
    const characters = localStorage.getItem('localCharacters');
    return characters ? JSON.parse(characters) : [];
  }

  updateLocalCharacter(updatedCharacter: any) {
    let characters = this.getLocalCharacters();
    const index = characters.findIndex(c => c.id === updatedCharacter.id);
    if (index > -1) {
      characters[index] = updatedCharacter;
      localStorage.setItem('localCharacters', JSON.stringify(characters));
    }
  }

  deleteLocalCharacter(id: number) {
    let characters = this.getLocalCharacters();
    characters = characters.filter(c => c.id !== id);
    localStorage.setItem('localCharacters', JSON.stringify(characters));
  }
  
}
