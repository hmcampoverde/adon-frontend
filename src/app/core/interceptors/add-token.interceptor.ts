import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '@environments/environment';
import { LoginService } from '@services/login.service';
import { TokenService } from '@services/token.service';
import { EMPTY } from 'rxjs';

export const addTokenInterceptor: HttpInterceptorFn = (request, next) => {
	const URL_REFRESH: string = `${environment.HOSTNAME}/auth/refresh`;
	const loginService = inject(LoginService);
	const tokenService = inject(TokenService);

	let request_: HttpRequest<any> = request;

	if (loginService.isAuthenticated()) {
		request_ = request.clone({ setHeaders: { authorization: `Bearer ${tokenService.getToken()}` } });
	}

	if (tokenService.isRefreshing && request.url !== URL_REFRESH) {
		return EMPTY;
	}

	return next(request_);
};
