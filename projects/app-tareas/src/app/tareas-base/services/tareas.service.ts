import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Filtros } from '../../models/filtros';
import { Tarea } from '../../models/tarea.model';
import { UtilsService } from '../../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private _storeKey: string
  private _filter: Filtros
  private _store!: Array<Tarea>
  private _store$!: Subject<Array<Tarea>>
  public store$!: Observable<Array<Tarea>>
  
  constructor(private utils: UtilsService) {
    this._storeKey = 'Tareas'
    this._filter = Filtros.Todas
    this._store$ = new Subject()
	this.store$ = this._store$.asObservable()
	this.loadTareas()
  }

  private loadTareas(): void {
	 this.utils.getAllTareas().subscribe(
		result => {
			this._store = result
			this._store$.next(this._store)
		})
  }

  private saveTareas(): void {
    // localStorage.setItem(this._storeKey, JSON.stringify(this._store))
    // console.log('Update Store', this._store)
    // console.log('Filtro en saveTareas', this._filter)
	this.loadTareas()
    this.applyFilter(this._filter) // next(this._store)

  }

  private applyFilter(filtro: Filtros): void {
    switch (filtro) {
      case Filtros.Activas:
        this._store$.next(this._store.filter(
          item => !item.isCompleted
        ))
        break;
      case Filtros.Completas:
        this._store$.next(this._store.filter(
          item => item.isCompleted
        ))
        break;
      default:   // Filtros.Todas
        this._store$.next(this._store)
        break;
    }
  }

  public setFilter(filtro: Filtros) {
    this._filter = filtro
    console.log('Filtro en setFilter',filtro)
    this.applyFilter(filtro)
  }  

  public deleteAllTareas(): void {
    this._store = []
    localStorage.removeItem(this._storeKey)
    console.log('Reset Store', this._store)
    this._store$.next(this._store)
  }

  public addTarea(tarea: Tarea): void { 
	this.utils.setTarea(tarea).subscribe(
		(result: any) => {
			console.log(result)
			// this._store.push();
			this.saveTareas();
		} 
	)  
  }

  public deleteTarea(tareaId: string): void {
		this._store = this._store.filter(item => item._id !== tareaId)
		this.utils.deleteTarea(tareaId).subscribe(
			(result: any) => {
				console.log(result)
				this.saveTareas();
			}
		)
  }

  public changeTarea(tareaId: string): void {
    console.log(tareaId)
	const item = this._store.find(
      item => item._id  ===  tareaId
	) 
	if (item)  {
		const props = [
			{ 	propName: "isCompleted", 
				value: !item.isCompleted
			}
		]	
		this.utils.updateTarea(tareaId, props ).subscribe(
			(result: any) => {
				console.log(result)
				this.saveTareas();
			}
		)
	}
  }

}