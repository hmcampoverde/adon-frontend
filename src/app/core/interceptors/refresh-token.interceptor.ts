import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@models/token';
import { LoginService } from '@services/login.service';
import { TokenService } from '@services/token.service';
import { EMPTY, catchError, concatMap, finalize, throwError } from 'rxjs';

export const refreshTokenInterceptor: HttpInterceptorFn = (request, next) => {
	const tokenService = inject(TokenService);
	const helperService = new JwtHelperService();
	const loginService = inject(LoginService);
	const router = inject(Router);

	return next(request).pipe(
		catchError((errorResponse: HttpErrorResponse) => {
			if (errorResponse.status === HttpStatusCode.Unauthorized) {
				const token: Token = new Token(tokenService.getToken());

				if (token.token && helperService.isTokenExpired(token.token)) {
					tokenService.isRefreshing = true;
					console.log('**** REFRESHING TOKEN ****');
					return loginService.refresh(token).pipe(
						concatMap((data: Token) => {
							console.log('**** TOKEN REFRESH ****');
							tokenService.setToken(data.token);
							return next(request.clone({ setHeaders: { authorization: `Bearer ${data.token}` } }));
						}),
						catchError(() => {
							console.log('**** ERROR REFRESHING TOKEN ****');
							loginService.logout();
							router.navigateByUrl('/auth/login');
							return EMPTY;
						}),
						finalize(() => (tokenService.isRefreshing = false))
					);
				} else {
					router.navigateByUrl('/auth/access');
				}
			}
			return throwError(() => errorResponse);
		})
	);
};
