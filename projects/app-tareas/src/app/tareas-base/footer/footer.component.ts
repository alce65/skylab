import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Filtros } from '../../models/filtros';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'skl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	filtros!: Array<Filtros>
	fcFiltro!: FormControl
  	constructor(
    	private fb: FormBuilder,
		private tareasService: TareasService,
		private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.filtros = [
			Filtros.Todas, Filtros.Completas, Filtros.Activas
		]
		this.fcFiltro = this.fb.control('Todas')

		this.fcFiltro.valueChanges.subscribe(
			value => this.tareasService.setFilter(value)
		)
  }

  onClickBorrarTodos(modalName: any) {
		this.modalService.open(modalName, {
			ariaLabelledBy: 'modal-basic-title',
			backdrop: 'static'
		}).result.then(
			result => {
				if (result == 'Confirm') {
					this.tareasService.deleteAllTareas()
				}
			}
		)
	}

}
