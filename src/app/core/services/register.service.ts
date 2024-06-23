import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Register } from '@models/register';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	private readonly URL: string = `${environment.HOSTNAME}/register`;
	private readonly _http = inject(HttpClient);

	public register(register: Register): Observable<any> {
		return this._http.post<any>(`${this.URL}/`, register);
	}
}
