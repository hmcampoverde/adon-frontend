import { Routes } from '@angular/router';
import { securityGuard } from './core/guards/security.guard';
import { AppLayoutComponent } from './pages/layout/app.layout.component';

export const routes: Routes = [
	{
		path: '',
		component: AppLayoutComponent,
		canActivateChild: [securityGuard],
		children: [
			{
				path: '',
				data: { breadcrumb: 'Dashboard' },
				loadChildren: () => import('./pages/dashboard/dashboard.routes').then((c) => c.DASHBOARD_ROUTES)
			},
			{
				path: 'profile',
				data: { breadcrumb: 'Mi Perfil' },
				loadChildren: () => import('./pages/profile/profile.routes').then((m) => m.PROFILE_ROUTES)
			},
			{
				path: 'employee',
				data: { breadcrumb: 'Empleado' },
				loadChildren: () => import('./pages/employee/employee.routes').then((m) => m.EMPLOYEE_ROUTE)
			},
			{
				path: 'institution',
				data: { breadcrumb: 'Institución' },
				loadChildren: () => import('./pages/institution/institution.routes').then((m) => m.INSTITUTION_ROUTE)
			}
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES)
	},
	{ path: 'error', loadChildren: () => import('./pages/error/error.routes').then((m) => m.ERROR_ROUTES) },
	{ path: 'notfound', loadChildren: () => import('./pages/notfound/notfound.routes').then((m) => m.NOTFOUND_ROUTES) },
	{ path: '**', redirectTo: '/notfound' }
];
