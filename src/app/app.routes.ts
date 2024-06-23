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
				data: { breadcrumb: 'Perfil' },
				loadChildren: () => import('./pages/profile/profile.routes').then((m) => m.PROFILE_ROUTES)
			}
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES)
	},
	{ path: 'notfound', loadChildren: () => import('./pages/notfound/notfound.routes').then((m) => m.NOTFOUND_ROUTES) },
	{ path: '**', redirectTo: '/notfound' }
];
