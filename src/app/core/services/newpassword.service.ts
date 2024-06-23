import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { User } from '@models/user';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NewPasswordService {
	public user = signal<User | undefined>(undefined);

	private readonly URL: string = `${environment.HOSTNAME}/auth/`;
	private readonly _http = inject(HttpClient);

	public findByUsername(username: string): Observable<User> {
		return this._http.get<User>(`${this.URL}findByUsername/${username}`);
	}

	public updatePassword(user: User): Observable<Message> {
		return this._http.put<Message>(`${this.URL}updatePasswordByUsername/${user.username}`, user);
	}
}
