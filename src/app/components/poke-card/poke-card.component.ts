

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../services/poke.service';
import { pokeModel } from '../../models/pokeModel';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CommonModule],
  providers:[PokeService],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent {
pokemon?: pokeModel
pokemons: pokeModel[] = []

constructor(private service:PokeService){}

  ngOnInit():void{
    this.pokeInfo()
  }
  pokeInfo():void{
    this.service.getPokemonJson().subscribe({
      next: (res) => {
        res.results.forEach((poke:any) => {
          this.service.getPokemonBody(poke.url).subscribe({
            next: (res) => {
              this.pokemon = {
                name: res.name,
                id: res.id,
                sprites: res.sprites,
                types: res.types
              }
              this.pokemons.push(this.pokemon)
              
            }
          })
        })
      }
    })
  }

  
}
