import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NewPasswordService {
	public user = signal<User | undefined>(undefined);

	private readonly URL: string = `${environment.HOSTNAME}/auth/`;
	private readonly _http = inject(HttpClient);

	public findByUsername(username: string): Observable<User> {
		return this._http.get<User>(this.URL + `findByUsername/${username}`);
	}

	public updatePassword(user: User): Observable<any> {
		return this._http.put<any>(this.URL + `updatePasswordByUsername/${user.username}`, user);
	}
}
