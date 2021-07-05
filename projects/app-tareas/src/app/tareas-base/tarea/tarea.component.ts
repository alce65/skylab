import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareasService } from '../services/tareas.service';

@Component({
	selector: 'skl-tarea',
	templateUrl: './tarea.component.html',
	styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
	@Input() tarea!: Tarea

	constructor(
		private tareasService: TareasService,
	) {}

	ngOnInit(): void {
		this.tarea =  {...this.tarea};
	}

	onChangeCompletedSend(): void {
		this.tareasService.changeTarea(this.tarea._id)
	}

	onClickBorrarSend(): void {
		this.tareasService.deleteTarea(this.tarea._id)
	}

}
