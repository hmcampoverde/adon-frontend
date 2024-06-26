import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { errorInterceptor } from '@interceptors/error.interceptor';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { spinnerInterceptor } from '@interceptors/spinner.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { addTokenInterceptor } from './core/interceptors/add-token.interceptor';
import { refreshTokenInterceptor } from './core/interceptors/refresh-token.interceptor';
import { AppLayoutModule } from './pages/layout/app.layout.module';

export const appConfig: ApplicationConfig = {
	providers: [
		ConfirmationService,
		MessageService,
		importProvidersFrom(AppLayoutModule),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(
			withFetch(),
			withInterceptors([spinnerInterceptor, addTokenInterceptor, refreshTokenInterceptor, errorInterceptor])
		),
		provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	]
};
