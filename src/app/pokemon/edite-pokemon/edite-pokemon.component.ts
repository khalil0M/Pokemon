import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edite-pokemon',
  template: `
    <h2>Edite {{ pokemon?.name }}</h2>

    <p class="center">
       <img [src]="pokemon?.picture">
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditePokemonComponent implements OnInit {

  pokemon : Pokemon|undefined;

  constructor(
    private router : ActivatedRoute,
    private pokemonService : PokemonService
  ) { }

  ngOnInit(){
    const pokemonId :string|null = this.router.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

}
