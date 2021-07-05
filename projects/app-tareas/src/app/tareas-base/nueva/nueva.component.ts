import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { TareasService } from '../services/tareas.service';

@Component({
	selector: 'skl-nueva',
	templateUrl: './nueva.component.html',
	styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
	fgNewTarea!: FormGroup
	constructor(
		private fb: FormBuilder,
		private tareasService: TareasService,
		private utils: UtilsService 
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
		this.tareasService.addTarea(
			{...this.fgNewTarea.value,
				id: this.utils.generateId(this.fgNewTarea.value)
			}
		)
		this.fgNewTarea.reset();
	}
}