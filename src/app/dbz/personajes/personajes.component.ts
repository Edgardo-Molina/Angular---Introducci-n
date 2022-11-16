import { Component, Input } from '@angular/core';
import { Personaje } from '../interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // @Input("data") personajes: Personaje[] = [];

  constructor(private dbzService:DbzService){

  }

  get personajes(){
    return this.dbzService.__personajes
  }

}
