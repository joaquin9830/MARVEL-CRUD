import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as md5 from 'crypto-js/md5';


export interface Character {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})



export class CharacterService {

  
}
