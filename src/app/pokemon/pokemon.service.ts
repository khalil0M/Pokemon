import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';


@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
      return POKEMONS;
  }

  getPokemonById(pokemonId : number) : Pokemon|undefined{
    return POKEMONS.find(Pokemon => pokemonId == pokemonId);
  }

  getPokemonTypeList() : string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insect',
      'Normal',
      'Elictrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
