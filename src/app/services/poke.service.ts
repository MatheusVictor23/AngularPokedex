import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokeRequest } from '../models/pokeRequest';
@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url:string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&&limit=9'
  constructor(private http:HttpClient) { }

  getPokemonJson():Observable<pokeRequest>{
   return  this.http.get<pokeRequest>(this.url)
  }

  getPokemonBody(pokeUrl:string):Observable<pokeRequest>{
    return this.http.get<pokeRequest>(pokeUrl)
  }
}
