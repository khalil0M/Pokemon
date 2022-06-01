import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditePokemonComponent } from './edite-pokemon/edite-pokemon.component';

const routesPokemon: Routes = [
  { path : 'edite/pokemon/:id' , component:EditePokemonComponent},
  { path : 'pokemons' , component:ListPokemonComponent},
  { path : 'pokemon/:id' , component:DetailPokemonComponent}
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditePokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPokemon)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
