import { Action, createReducer, on } from "@ngrx/store";
import { iTarea } from "../../models/tarea.model";

import * as fromTareas from './tarea.actions'

// Parte del arbol de estados para este Reducer

export type State = Array<iTarea>

export const initialState: State = []

const _counterReducer = createReducer(
  initialState,
  on(fromTareas.LoadTareasSuccess, (state, {payload} ) => payload  ), // payload: Array<Tarea>
  on(fromTareas.LoadTareasFailure, state => state ), // payload: { error: any }
  on(fromTareas.DeleteAllTareasSuccess, (state, {payload}) => payload ), //{payload: []}
  on(fromTareas.ToggleAllTareas, (state, {payload}) => {
    return state.map( item => {return { ...item, isCompleted: payload }})
  }),
)

export function tareaReducer(
  state: State = initialState,
  action: Action): State {
    return _counterReducer(state, action);
}
