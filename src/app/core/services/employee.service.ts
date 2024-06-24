import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Message } from 'primeng/api';
import { EMPTY, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	private readonly URL: string = `${environment.HOSTNAME}/employee`;
	private readonly _http = inject(HttpClient);

	public findAll(): Observable<Array<Employee>> {
		return this._http.get<Array<Employee>>(`${this.URL}/findAll`);
	}

	public findById(id: number): Observable<Employee> {
		return EMPTY;
	}

	public create(employee: Employee): Observable<Message> {
		return EMPTY;
	}

	public update(id: number, employee: Employee): Observable<Message> {
		return EMPTY;
	}

	public deleteById(id: number): Observable<Message> {
		return EMPTY;
	}
}
