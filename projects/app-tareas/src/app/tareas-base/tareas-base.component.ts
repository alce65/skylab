import { Component, OnInit } from '@angular/core';
import { MenuItems } from '../core/interfaces/interfaces';

@Component({
  selector: 'skl-tareas-base',
  template: `
  <div class="container">
    <div class="row">
      <skl-lista></skl-lista>
    </div>
  </div>
`,
styles: [
  `:host {
    display: block;
  }`
]
})
export class TareasBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
