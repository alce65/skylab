import { useState, useEffect } from 'react'
import * as ts from '../services/Tareas.service'
import { Nueva } from "./Nueva"
import { Lista } from './Lista'
import { Footer } from "./Footer"
import './Tareas.css'

export function Tareas() {

	const [store, setStore] = useState([]) // Array<Tarea>
	const [filteredStore, setFilteredStore] = useState([])

	useEffect(() => {
		ts.getAllTareas().then(
			result => {
				if (result) {
					console.log('Fetch Tareas', result)
					setStore(result)
					setFilteredStore(result)
				}
			}
		)
	}, [])


	const applyFilter = (filtro) => {
		switch (filtro) {
		  case 'Activas':
			setFilteredStore(store.filter(
			  item => !item.isCompleted
			))
			break;
		  case 'Completas':
			setFilteredStore(store.filter(
				item => item.isCompleted
			  )) 
			break;
		  default:   // Filtros.Todas
		  	setFilteredStore(store)
			break;
		}
	  }


	/* const deleteAllTareas = () => {
		setStore([])
	} */
	/**
	 * 
	 * @param {Tarea} tarea 
	 */
	const addTarea = (tarea) => {
		ts.setTarea(tarea).then(
			result => {
				console.log('Added by endpoint', result)
				setStore(previousStore => [...previousStore, result])
				console.log('Updated Store', store)
			}
		)
	}

	/* onClickBorrarSend(): void {
		this.tareasService.deleteTarea(this.tarea._id)
	} */

	const deleteTarea = (tareaId) => {
		ts.deleteTarea(tareaId).then(
			result => {
				console.log('Deleted by endpoint', result)
				setStore(store.filter(item => item._id !== tareaId))
				console.log('Store', store)
			}
		)
		
	}

	/* onChangeCompletedSend(): void {
		this.tareasService.changeTarea(this.tarea._id)
	} */
	
	const changeTarea = (_id, completedState) => {
		console.log('Parametros', _id, completedState)
		ts.updateTarea(_id, [{
				propName: 'isCompleted', 
				value: completedState
			}]).then(
			result => {
				console.log('Updated by endpoint', result)
				setStore(store.map(item => {
					return {
						...item, 
						isCompleted: item._id  ===  _id ? !item.isCompleted : item.isCompleted
					}
				}))
				console.log('Store', store)				
			}
		)
	}

	/* @Input() tarea!: Tarea

	constructor(
		private tareasService: TareasService,
	) {}

	ngOnInit(): void {
		this.tarea =  {...this.tarea};
	}

 */

	const title = 'Lista de Tareas'
	return (
		<div>
			<h2>{ title }</h2>

			<Nueva onAddTarea={addTarea} ></Nueva>
			<Lista 
				tareas = {filteredStore} 
				deleteTarea = {deleteTarea}
				changeTarea = {changeTarea}>
			</Lista>
			<Footer
				applyFilter = {applyFilter}
			></Footer>
			
		</div>
	)
}