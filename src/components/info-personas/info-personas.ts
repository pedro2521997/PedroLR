import { Component } from '@angular/core';

/**
 * Generated class for the InfoPersonasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-personas',
  templateUrl: 'info-personas.html'
})
export class InfoPersonasComponent {

  nombre: string;
  apellido: string;
  text: string;

  constructor() {
    this.nombre = 'Pedro';
    this.apellido= 'López de la Reina García Cervigón';
  }

}
