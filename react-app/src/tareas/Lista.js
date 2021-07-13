
import { Tarea } from "./Tarea";

export function Lista ({tareas, changeTarea, deleteTarea}) {
	/* <ng-container *ngIf="tareas?.length; else sinTareas" >
	/ng-container> */
	if (tareas?.length) {
		return (
			<div className="lista">
				<p className="h4">Lista de tareas</p>
				<ul>
					{/* <li *ngFor="let item of tareas; index as i">
					<skl-tarea [tarea]="item"></skl-tarea>
					</li> */}
					{tareas.map(
						tarea => {
						return (
							<li key={tarea._id}>
								<Tarea  
									tarea={tarea}
									deleteTarea = {deleteTarea}
									changeTarea = {changeTarea}>	
								</Tarea>
							</li>
							)
						}
					)}
				</ul>
			</div>)
	} else {
		return (
			<div className="lista">
				<p>Anímate a añadir una tarea</p>
			</div>)
	}
}


    






