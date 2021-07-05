import { Action, createReducer, on } from '@ngrx/store';
import { Filtros } from '../../models/filtros';
import { SetFilters } from './filter.actions';


// export const filterFeatureKey = 'filter';

export type State = string

export const initialState: State = Filtros.Todas

const _filtroReducer = createReducer(
  initialState,
  on(SetFilters, (state, {payload}) => payload)
)

export function filtroReducer(
  state: State | undefined, 
  action: Action): State {
    return _filtroReducer(state, action)

  /* switch (action.type) {
    case FilterActionTypes.SetFilters:
      return <Filtros>action.payload
    default:
      return state;
  } */
}
