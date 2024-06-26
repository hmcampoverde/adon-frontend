import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTE: Routes = [
	{
		path: '',
		loadComponent: () => import('./list/list.component').then((c) => c.ListComponent)
	},
	{
		path: 'create',
		data: { breadcrumb: 'Nuevo' },
		loadComponent: () => import('./save/save.component').then((c) => c.SaveComponent)
	},
	{
		path: 'update/:id',
		data: { breadcrumb: 'Editar' },
		loadComponent: () => import('./save/save.component').then((c) => c.SaveComponent)
	}
];
