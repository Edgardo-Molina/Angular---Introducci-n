import { Component } from '@angular/core';
import { Personaje } from '../interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(){

  }

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }


}
