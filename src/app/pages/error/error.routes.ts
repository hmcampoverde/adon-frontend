import { Routes } from '@angular/router';

export const ERROR_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./error.component').then((c) => c.ErrorComponent)
	}
];
