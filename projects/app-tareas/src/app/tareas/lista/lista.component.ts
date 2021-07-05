import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

import * as fromTareas from '../redux/tarea.reducer'
import { LoadTareas, ToggleAllTareas} from '../redux/tarea.actions';
import { visibleTareas } from '../redux/tarea.selectors';

// import { StoreTareasService } from '../../services/store-tareas.service';

@Component({
	selector: 'skl-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
	tareas!: fromTareas.State // Array<Tarea>
	allSelect!: boolean;
	constructor(private store: Store<State>) { }

	ngOnInit(): void {
		this.tareas = []
		this.allSelect = false;
		// this.tareas = this.tareasService.loadTareas();
		this.store.dispatch(LoadTareas())
		console.log('Tareas', this.tareas)

		// this.tareasService.store$.subscribe(
		// 	(data: Array<Tarea>) => this.tareas = data
		// );
		
		// this.store.select('tareas')
		// En lugar del select 'tareas'
		// le pasamos un selector
	  	this.store.select(visibleTareas)
			.subscribe( (stateTareas: fromTareas.State) => {
			this.tareas = stateTareas
			console.log('Tareas', this.tareas)
	  	})
	}

	selectAll(completed: boolean) {
		this.allSelect = !this.allSelect
		this.store.dispatch(ToggleAllTareas({payload: completed}))
	}
}
