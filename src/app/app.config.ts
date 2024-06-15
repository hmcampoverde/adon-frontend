import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { AppLayoutModule } from './pages/layout/app.layout.module';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(AppLayoutModule),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	]
};
