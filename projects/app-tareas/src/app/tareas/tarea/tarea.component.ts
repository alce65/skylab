import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ChangeTarea, RemoveTarea } from '../redux/tarea.actions';


@Component({
	selector: 'skl-tarea',
	templateUrl: './tarea.component.html',
	styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
	@Input() tarea!: Tarea
	@Input() indice!: number
	constructor(private store: Store<State>) {}

	ngOnInit(): void {
		this.tarea = {...this.tarea};
	}

	onChangeCompleted(): void {
		this.store.dispatch(ChangeTarea({payload: this.tarea}))
	}

	onClickBorrar(): void {
		this.store.dispatch(RemoveTarea({payload: this.tarea._id}))
	}

}
