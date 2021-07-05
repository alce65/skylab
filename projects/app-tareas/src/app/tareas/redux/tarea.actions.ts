import { createAction, props } from '@ngrx/store';
import { Tarea } from '../../models/tarea.model';


export enum TareaActionTypes {
	LoadTareas = '[Tarea] Load Tareas',
	LoadTareasSuccess = '[Tarea] Loaded Tareas',
	LoadTareasFailure = '[Tarea] Error on Load Tareas',

	AddTarea = '[Tarea] Add Tarea',
	AddTareaFailure = '[Tarea] Errpr adding Tareas',

	RemoveTarea = '[Tarea] RemoveTarea',
	RemoveTareaFailure = '[Tarea] Error removing Tareas',

	ChangeTarea = '[Tarea] ChangeTarea',
	ChangeTareFailure = '[Tarea] Error changing Tareas',

	DeleteAllTareas = '[Tarea] Delete All Tareas',
	DeleteAllTareasSuccess = '[Tarea] Deleted Tareas',
	DeleteAllTareasFailure = '[Tarea] Error on Delete All Tareas',
	ToggleAllTareas = '[Tarea] Complete/uncomplete All Tareas',
}

export const LoadTareas = createAction(
  	TareaActionTypes.LoadTareas
) 

export const LoadTareasSuccess = createAction(
  	TareaActionTypes.LoadTareasSuccess,
  	props<{payload: Array<Tarea>}>()
) 

export const LoadTareasFailure = createAction(
  	TareaActionTypes.LoadTareasFailure,
  	props<{payload: { error: any }}>()
) 

/** Comando que desencadena un efecto */
export const AddTarea = createAction(
	TareaActionTypes.AddTarea,
	props<{ payload: Tarea }>()
)

/** Comando que desencadena un efecto */
export const RemoveTarea = createAction(
	TareaActionTypes.RemoveTarea,
	props<{ payload: string }>()
)

/** Comando que desencadena un efecto */
export const ChangeTarea = createAction(
	TareaActionTypes.ChangeTarea,
	props<{ payload: Tarea }>()
)

export const DeleteAllTareas = createAction(
  TareaActionTypes.DeleteAllTareas,
) 

export const DeleteAllTareasSuccess = createAction(
  TareaActionTypes.DeleteAllTareasSuccess,
  props<{payload: []}>()
) 

export const DeleteAllTareasFailure = createAction(
  TareaActionTypes.DeleteAllTareasFailure,
  props<{payload: { error: any }}>()
) 

export const ToggleAllTareas = createAction(
  TareaActionTypes.ToggleAllTareas,
  props<{payload: boolean}>()
)
