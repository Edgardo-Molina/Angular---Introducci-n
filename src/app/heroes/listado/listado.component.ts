import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Megaman', 'Tails', 'Zero', 'Sonic'];
  heroeBorrado: string | undefined = '';

  borrar() {
    this.heroeBorrado = this.heroes.shift();
  }

}
