import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 33;

  get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();
  }

  get obtenerNombre(): string {
    return ` ${this.nombre} -  ${this.edad} `;
  }

  // obtenerNombre(){
  //   return ` ${this.nombre} -  ${this.edad} `
  // }

  cambiarNombre() {
    this.nombre = 'Megaman';
  }

  cambiarEdad() {
    this.edad = 22;
  }
}
