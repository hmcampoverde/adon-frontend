import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Login } from '@models/login';
import { Token } from '@models/token';
import { Observable, map } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private readonly URL: string = `${environment.HOSTNAME}/auth/`;
	private readonly _http = inject(HttpClient);
	private tokenService = inject(TokenService);

	login(login: Login): Observable<boolean> {
		return this._http
			.post<Token>(this.URL + `login`, login)
			.pipe(map(({ token }) => this.tokenService.setToken(token)));
	}

	isAuthenticated(): boolean {
		return !!this.tokenService.getToken();
	}

	refresh(token: Token): Observable<Token> {
		return this._http.post<Token>(this.URL + 'refresh', token);
	}

	logout(): void {
		this.tokenService.clearToken();
	}
}
