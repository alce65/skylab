import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skl-home',
  template: `
    <p>Ejemplo de Gestión de tareas!</p>
	<p>Disponible en dos versiones:</p>
	<ul>
		<li>Como servicio con el estado de la aplicació</li>
		<li>usando el patrón redux en la librería @ngrx</li>
	</ul>
	<p>El backend correspondiente debe estar en localhost:3000</p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
