import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { Tarea } from '../models/tarea.model';

@Injectable({
	providedIn: 'root'
})
export class UtilsService {
	urlBase: string;

	constructor(private http: HttpClient) {
		this.urlBase = environment.apiTareas;
	}

	generateId(tarea: Tarea) {
		const time = (new Date()).getTime()
		const reverse = time.toString().split('').reverse().join('')

		return tarea.titulo[0] +
			tarea.responsable[0] +
			'-' +
			reverse

	}


	getAllTareas(): Observable<Array<Tarea>> {
		return this.http.get(this.urlBase).pipe(
			map((result: any) => result.tareas)
		) as Observable<Array<Tarea>>;
	}


	getTarea(id: number): Observable<Tarea> {
		return this.http.get(this.urlBase + '/' + id) as Observable<Tarea>;
	}


	setTarea(item: Tarea): Observable<Tarea> {
		return this.http.post(this.urlBase, item) as Observable<Tarea>;
	}

	updateTarea(id: string, props: Array<any>): Observable<Tarea> {
		return this.http.patch(this.urlBase + '/' + id, props) as Observable<Tarea>;
	}

	deleteTarea(id: string): Observable<Tarea> {
		return this.http.delete(this.urlBase + '/' + id) as Observable<Tarea>;
	}
}


