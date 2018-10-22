import { Component } from '@angular/core';

/**
 * Generated class for the ListasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listas',
  templateUrl: 'listas.html'
})
export class ListasComponent {

  text: string;

  constructor() {
    console.log('Hello ListasComponent Component');
    this.text = 'Hello World';
  }

}
