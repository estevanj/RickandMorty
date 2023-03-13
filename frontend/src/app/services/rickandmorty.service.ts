import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private URL = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<any>(this.URL + '/character');
  }
}
