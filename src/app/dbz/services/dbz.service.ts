import { Injectable } from '@angular/core';
import { Personaje } from '../interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 5_000,
    },
    {
      nombre: 'Vegeta',
      poder: 15_000,
    },
  ];

  get __personajes() {
    return [...this._personajes];
  }

  render() {
    this._personajes;
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje){

    this._personajes.push(personaje);

  }
}
