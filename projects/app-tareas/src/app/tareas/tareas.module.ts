import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { TareasRoutingModule } from './tareas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';
import { FooterComponent } from './footer/footer.component';
import { TareasEffects } from './redux/tareas.effects';


@NgModule({
  declarations: [
		ListaComponent,
		NuevaComponent,
		TareaComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TareasRoutingModule,
		EffectsModule.forFeature([TareasEffects])
	],
})
export class TareasModule { }
