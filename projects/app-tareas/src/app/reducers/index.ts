import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromTareas from '../tareas/redux/tarea.reducer'
import * as fromFilters from '../tareas/redux/filter.reducer'


export interface State {
  tareas : fromTareas.State // Array<iTarea>
  filtro: fromFilters.State // Filtros (string)
}

export const reducers: ActionReducerMap<State|any> = {
  tareas: fromTareas.tareaReducer,
  filtro: fromFilters.filtroReducer,
}; 


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
