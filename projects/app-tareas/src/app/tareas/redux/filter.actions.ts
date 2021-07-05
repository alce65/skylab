import { Action, createAction, props } from '@ngrx/store';
import { Filtros } from '../../models/filtros';

export enum FilterActionTypes {
  LoadFilters = '[Filter] Load Filters',
  LoadFiltersSuccess = '[Filter] Load Filters Success',
  LoadFiltersFailure = '[Filter] Load Filters Failure',
  SetFilters = '[Filter] Set Filters',
}

/* export class LoadFilters implements Action {
  readonly type = FilterActionTypes.LoadFilters;
  constructor(public payload?: any ) {}
} */

export const LoadFilters = createAction(
  FilterActionTypes.LoadFilters
) 

/* export class LoadFiltersSuccess implements Action {
  readonly type: string = FilterActionTypes.LoadFiltersSuccess;
  constructor(public payload?: { data: any }) { }
} */

export const LoadFiltersSuccess = createAction(
  FilterActionTypes.LoadFiltersSuccess,
  props<{payload: { data: any }}>()
) 

/* export class LoadFiltersFailure implements Action {
  readonly type: string = FilterActionTypes.LoadFiltersFailure;
  constructor(public payload?: { error: any }) { }
} */

export const LoadFiltersFailure = createAction(
  FilterActionTypes.LoadFiltersFailure,
  props<{payload: { error: any }}>()
) 

/* export class SetFilters implements Action {
  readonly type: string = FilterActionTypes.SetFilters;
  constructor(public payload?: Filtros) { }
} */

export const SetFilters = createAction(
  FilterActionTypes.SetFilters,
  props<{payload: Filtros}>()
) 

/* export type FilterActions = 
  LoadFilters | 
  LoadFiltersSuccess | 
  LoadFiltersFailure |
  SetFilters; */

