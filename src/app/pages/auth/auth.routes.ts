import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'login',
				loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent)
			},
			{
				path: 'register',
				loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent)
			},
			{
				path: 'forgot',
				loadComponent: () => import('./forgotpassword/forgotpassword.component').then((c) => c.ForgotpasswordComponent)
			},
			{
				path: 'newpassword',
				loadComponent: () => import('./newpassword/newpassword.component').then((c) => c.NewpasswordComponent)
			}
		]
	}
];
