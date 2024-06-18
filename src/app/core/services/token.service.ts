import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	private _isRefreshing: boolean = false;

	get isRefreshing(): boolean {
		return this._isRefreshing;
	}

	set isRefreshing(value) {
		this._isRefreshing = value;
	}

	setToken(token: string): boolean {
		window.sessionStorage.removeItem(environment.TOKEN_AUTH_NAME);
		window.sessionStorage.setItem(environment.TOKEN_AUTH_NAME, token);
		return true;
	}

	getToken(): string {
		return sessionStorage.getItem(environment.TOKEN_AUTH_NAME);
	}

	clearToken(): boolean {
		window.sessionStorage.clear();
		return true;
	}
}
