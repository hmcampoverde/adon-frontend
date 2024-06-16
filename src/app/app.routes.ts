import { Routes } from '@angular/router';
import { AppLayoutComponent } from './pages/layout/app.layout.component';

export const routes: Routes = [
	{
		path: '',
		component: AppLayoutComponent,
		children: [
			{
				path: '',
				data: { breadcrumb: 'Dashboard' },
				loadChildren: () => import('./pages/dashboard/dashboard.routes').then((c) => c.DASHBOARD_ROUTES)
			}
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES)
	}
];
