import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TareasBaseComponent } from './tareas-base.component';

const routes: Routes = [
  {
    path: '', 
    component: TareasBaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasBaseRoutingModule { }
