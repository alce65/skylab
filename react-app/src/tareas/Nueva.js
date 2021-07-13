import { useState } from 'react'

export function Nueva({onAddTarea}) {

	/* 
	constructor(
		private fb: FormBuilder,
		private tareasService: TareasService,
		private utils: UtilsService 
	) {
		
	} */	

	const INITIAL_TAREA = {
			titulo: 'Taréa número ...',
			responsable: '',
			fechaInicio: new Date(),
			isCompleted: false
		}

	/* fgNewTarea!: FormGroup */
	const [newTarea, setNewTarea] = useState(INITIAL_TAREA)

	const handleInputChange = (event, item) => {
		let tarea = {...newTarea}
		tarea[item] = event.target.value
		setNewTarea( tarea)
	} 

	const onClickGuardar = (event) => {
		event.preventDefault()
		
		if (!newTarea.titulo) { /* this.fgNewTarea.invalid */
			return;
		}
		/* this.tareasService.addTarea(
			{...this.fgNewTarea.value,
				id: generateId(this.fgNewTarea.value)
			}
		) */

		// const result = {...newTarea}
		// result._id = generateId(newTarea)

		// console.log('Formulario', result)
		// onAddTarea(result)

		onAddTarea({...newTarea})
		/* this.fgNewTarea.reset(); */
		setNewTarea(INITIAL_TAREA)
	}

	return (
		<details className="nueva">
			<summary className="h4">Nueva tarea</summary>
			<form  onSubmit={onClickGuardar}>
				{/*  [formGroup]="fgNewTarea" */}
				<div className="form-group">
					<label htmlFor="titulo">Titulo</label>
					<input type="text" value={newTarea.titulo}
						onChange={(event) => handleInputChange(event, 'titulo')}
						className="form-control" name="titulo" id="titulo" />
				</div>
				<div className="form-group">
					<label htmlFor="responsable">Responsable</label>
					<input type="text" value={newTarea.responsable} autoComplete="nickname"
						onChange={(event) => handleInputChange(event, 'responsable')}
						className="form-control" name="responsable" id="responsable"/>
				</div>
				<div className="form-group">
					<label htmlFor="fecha">Fecha de inicio</label>
					<input type="date" value={newTarea.fechaInicio}
						onChange={(event) => handleInputChange(event, 'fechaInicio')}
						className="form-control" name="fechaInicio" id="fecha"/>
				</div>
				<button type="submit" className="btn btn-primary">
					{/* [disabled]="fgNewTarea.invalid" */}
					Guardar
				</button>
			</form>  
		</details>
	)
}