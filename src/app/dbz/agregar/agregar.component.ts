import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  @Input('dataNuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo)


    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }

  constructor(private dbzService: DbzService){

  }


}
