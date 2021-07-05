import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItems } from '../interfaces/interfaces';
// import { State } from '../reducers';

@Component({
  selector: 'skl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title!: string;
  counter$!: Observable<number>
  menuItems!: Array<MenuItems>
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.title = 'Tareas';
    this.router.events.subscribe(
      data => console.log(data)
    )
    this.menuItems = [
      {path:'home', name:'Inicio'},
      {path:'tareas-base', name:'Tareas'},
      {path:'tareas', name:'Tareas con Redux'}
    ]
    
  }

}
