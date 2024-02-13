import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokeRequest } from '../models/pokeRequest';
import { pokeModel } from '../models/pokeModel';
@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url:string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&&limit=40'
  constructor(private http:HttpClient) { }

  getPokemonJson():Observable<pokeRequest>{
   return  this.http.get<pokeRequest>(this.url)
  }

  getPokemonBody(pokeUrl:string):Observable<pokeModel>{
    return this.http.get<pokeModel>(pokeUrl)
  }
}
