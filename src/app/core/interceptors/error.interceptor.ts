import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
	const messageService = inject(MessageService);
	return next(request).pipe(
		catchError((errorResponse: HttpErrorResponse) => {
			if (errorResponse.status !== HttpStatusCode.Unauthorized) {
				const { error } = errorResponse;
				if (error) {
					if (errorResponse.status != 0) {
						if (Array.isArray(error)) messageService.addAll(error);
						else messageService.add(error);
					} else {
						messageService.add({
							severity: 'error',
							summary: 'Error',
							detail: 'Ocurrio un error durante la transacción'
						});
					}
				}
			}
			return throwError(() => errorResponse);
		})
	);
};
