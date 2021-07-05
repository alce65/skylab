import { Component, OnInit } from '@angular/core';
import { Filtros } from '../../models/filtros';
import { Tarea } from '../../models/tarea.model';
import { TareasService } from '../services/tareas.service';

@Component({
	selector: 'skl-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
	tareas!: Array<Tarea>

	constructor(
		private tareasService: TareasService
	) {
		
	 }

	ngOnInit(): void {
		this.tareas = []
		this.tareasService.store$.subscribe(
			(data: Array<Tarea>) => this.tareas = data
		);
		this.tareasService.setFilter(Filtros.Todas)
	}
}
