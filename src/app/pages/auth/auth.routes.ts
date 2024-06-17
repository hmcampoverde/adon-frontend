import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'register',
				loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent)
			}
		]
	}
];
