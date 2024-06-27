import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Institution } from '@models/institution';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InstitutionService {
	private readonly URL: string = `${environment.HOSTNAME}/institution`;
	private readonly _http = inject(HttpClient);

	public findAll(): Observable<Array<Institution>> {
		return this._http.get<Array<Institution>>(`${this.URL}/findAll`);
	}

	public findById(id: number): Observable<Institution> {
		return this._http.get<Institution>(`${this.URL}/findById/${id}`);
	}

	public create(institution: Institution): Observable<Message> {
		return this._http.post<Message>(`${this.URL}/create`, institution);
	}

	public update(id: number, institution: Institution): Observable<Message> {
		return this._http.put<Message>(`${this.URL}/update/${id}`, institution);
	}

	public deleteById(id: number): Observable<Message> {
		return this._http.delete<Message>(`${this.URL}/deleteById/${id}`);
	}
}
