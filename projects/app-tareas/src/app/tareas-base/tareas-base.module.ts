import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasBaseRoutingModule } from './tareas-base-routing.module';
import { TareasBaseComponent } from './tareas-base.component';
import { ListaComponent } from './lista/lista.component';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    TareasBaseComponent,
    ListaComponent,
    NuevaComponent,
    TareaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TareasBaseRoutingModule,
    CoreModule
  ]
})
export class TareasBaseModule { }
