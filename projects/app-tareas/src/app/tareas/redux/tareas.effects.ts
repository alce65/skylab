import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { concatMap, catchError, mergeMap, map } from 'rxjs/operators'
import { State } from '../../reducers';
import { UtilsService } from '../../services/utils.service';
import {
	TareaActionTypes, LoadTareasSuccess, LoadTareasFailure,
	DeleteAllTareasSuccess, DeleteAllTareasFailure, LoadTareas
} from './tarea.actions';


@Injectable()
export class TareasEffects {

	private storeKey: string;
	constructor(
		private actions$: Actions,
		private store: Store<State>,
		private utils: UtilsService) {
		this.storeKey = 'Tareas'
	}

	@Effect()
	loadTareas: Observable<Action> =
		this.actions$.pipe(
			ofType(TareaActionTypes.LoadTareas)
		).pipe(
			mergeMap(() => {
				return this.utils.getAllTareas().pipe(
					map((data: any) => {
						return LoadTareasSuccess({ payload: data })
					})
				)
			})
		).pipe(
			catchError(err => of(LoadTareasFailure({ payload: { error: err } })))
		)

	@Effect()
	addTarea: Observable<Action> =
		this.actions$.pipe(
			ofType(TareaActionTypes.AddTarea)
		).pipe(
			mergeMap((action: any) => {
				return this.utils.setTarea(action.payload).pipe(
					map((data: any) => {
						return LoadTareas()
					})
				)

			})
		)
	@Effect()
	removeTarea: Observable<Action> =
		this.actions$.pipe(
			ofType(TareaActionTypes.RemoveTarea)
		).pipe(
			mergeMap((action: any) => {
				return this.utils.deleteTarea(action.payload).pipe(
					map((data: any) => {
						return LoadTareas()
					})
				)
					
			}) 
		)
	

	@Effect()
	changeTarea: Observable<Action> =
		this.actions$.pipe(
			ofType(TareaActionTypes.ChangeTarea)
		).pipe(
			mergeMap((action: any) => {
				const props: Array<any> = [
					{ propName: "isCompleted", 
					value: action.payload.isCompleted}
				]
				return this.utils.updateTarea(action.payload._id, props).pipe(
					map((data: any) => {
						return LoadTareas()
					})
				)
					
			}) 
		)

	@Effect()
	deleteTareas: Observable<Action> =
		this.actions$.pipe(
			ofType(TareaActionTypes.DeleteAllTareas)
		).pipe(
			concatMap((tareas) => {
				return of(DeleteAllTareasSuccess({ payload: [] }))
			})
		).pipe(
			catchError(err => of(DeleteAllTareasFailure({ payload: { error: err } })))
		)

}
