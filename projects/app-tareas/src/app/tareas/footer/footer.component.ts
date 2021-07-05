import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Filtros } from '../../models/filtros';
import { State } from '../../reducers';
import { SetFilters } from '../redux/filter.actions';

import { DeleteAllTareas } from '../redux/tarea.actions';

// import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	filtros!: Array<Filtros>;
	fcFiltro!: FormControl;
	selectedFiltro!: string
	constructor(
		private store: Store<State>,
		private fb: FormBuilder,
		// private tareasService: TareasService,
		private modalService: NgbModal
	) {}

	ngOnInit(): void {
		// this.selectedFiltro = Filtros.Todas
		this.store.select('filtro').subscribe(
			filtro => {
				this.selectedFiltro = filtro
				console.log('Filtro:', this.selectedFiltro)
			}
		)

		this.filtros = [Filtros.Todas, Filtros.Completas, Filtros.Activas];
		this.fcFiltro = this.fb.control(this.selectedFiltro);

		this.fcFiltro.valueChanges.subscribe((value) => {
			// this.tareasService.applyFilter(value)
			this.store.dispatch(SetFilters({payload: value}));
			console.log(value);
		});
	}

	onClickBorrarTodos(modalName: any) {
		this.modalService
		.open(modalName, {
			ariaLabelledBy: 'modal-basic-title',
			backdrop: 'static',
		})
		.result.then((result) => {
			if (result == 'Confirm') {
			console.log('Confirm');
			// this.tareasService.deleteAllTareas()
			this.store.dispatch(DeleteAllTareas());
			}
		});
	}
}
