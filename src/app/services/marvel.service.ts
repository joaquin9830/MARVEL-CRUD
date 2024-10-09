import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private baseUrl = 'https://gateway.marvel.com/v1/public';
  private publicKey = '5844c6ba3b9f8ddc0302a7f47ff0d779';
  private privateKey = '92f81b16abffd686dd54461ea4dbd51ef8432a23';

  constructor(private http: HttpClient) {}

  
}
