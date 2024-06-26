import { HttpInterceptorFn } from '@angular/common/http';
import { inject, signal } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (request, next) => {
	let _activeRequest = signal<number>(0);
	const _spinnerService = inject(NgxSpinnerService);

	if (_activeRequest() === 0) {
		_spinnerService.show();
	}

	_activeRequest.update((value: number) => value + 1);

	return next(request).pipe(
		finalize(() => {
			_activeRequest.update((value: number) => value - 1);
			if (_activeRequest() === 0) {
				setTimeout(() => _spinnerService.hide(), 200);
			}
		})
	);
};
