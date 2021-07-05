import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddTarea } from '../redux/tarea.actions';
import { Tarea } from '../../models/tarea.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';


@Component({
	selector: 'skl-nueva',
	templateUrl: './nueva.component.html',
	styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
	
	fgNewTarea!: FormGroup
	constructor(
		private fb: FormBuilder,
		private store: Store<State>,
		private utils: UtilsService
		// private tareasService: TareasService,
		) {
	}
		
	ngOnInit(): void {
		this.fgNewTarea = this.fb.group({
			titulo: ['Taréa número ...', [Validators.required]],
			responsable: ['', [Validators.required]],
			fechaInicio: [new Date()],
			isCompleted: [false, []]
		});
	}

	onClickGuardar(): void {
		if (this.fgNewTarea.invalid) {
			return;
		}
		// this.tareasService.addTarea(this.fgNewTarea.value)
		this.store.dispatch(AddTarea({
			payload: {...this.fgNewTarea.value,
				id: this.utils.generateId(this.fgNewTarea.value)
			}}
		))
		this.fgNewTarea.reset();
	}

	
}
