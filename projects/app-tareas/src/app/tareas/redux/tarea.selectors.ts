import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../../reducers';
import { Filtros } from '../../models/filtros';

// const select<Propiedad> = () => {}
const selectTareas = (state: State) => state.tareas
const selectFiltros = (state: State) => state.filtro

export const visibleTareas = createSelector(
    selectTareas,
    selectFiltros,
    (tareas, filtros) => {
        switch (filtros) {
            case Filtros.Activas:
                return tareas.filter(item => !item.isCompleted)
            case Filtros.Completas:
                return tareas.filter(item => item.isCompleted)
            default:   // Filtros.Todas
                return tareas
        }
    }
)