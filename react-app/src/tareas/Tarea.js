//import { useState } from 'react'

export function Tarea ({tarea, changeTarea, deleteTarea }) {

	//const [completedState, setcompletedState] = useState(tarea.isCompleted)

	const onChangeCompleted = (ev) => {
		//setcompletedState(ev.target.value)
		changeTarea(tarea._id, ev.target.checked)
	}

	const onClickBorrar = () => {
		deleteTarea(tarea._id)
	}


	//const tarea = tarea
	return (
		<div className="tarea">
			<span>
				<input type="checkbox" 
				checked={tarea.isCompleted}
				onChange={onChangeCompleted} />                    
			</span>
			<span>{ tarea?._id.slice(0,8) }</span>
			<span>{tarea?.titulo} | {tarea?.responsable}</span>
			<span> {tarea?.fechaInicio.toLocaleString()}</span>
			<span className="boton" onClick={onClickBorrar}>
				🗑
			</span> 
		</div>
		)

	/* <span>
		<input type="checkbox" [(ngModel)]="tarea.isCompleted" 
			(change)="onChangeCompletedSend()">                    
	</span>
	<span>{{ tarea._id.slice(0,8) }}</span>
	<!-- <span [className.completed]="tarea.isCompleted"
	>{{tarea.titulo}} | {{tarea.responsable}}</span> -->
	<span [ngClass]="{completed: tarea.isCompleted}"
	>{{tarea.titulo}} | {{tarea.responsable}}</span>
	<span> {{tarea.fechaInicio | date : 'fullDate'}}</span>
	<span className="boton" (click)="onClickBorrarSend()">🗑</span> */


}

