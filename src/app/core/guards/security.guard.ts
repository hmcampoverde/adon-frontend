import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Menu } from '@models/menu';
import { LoginService } from '@services/login.service';
import { MenuService } from '@services/menu.service';
import { SessionService } from '@services/session.service';
import { map } from 'rxjs';

export const securityGuard: CanActivateFn = (route, state) => {
	const loginService = inject(LoginService);
	const router = inject(Router);
	const menuService = inject(MenuService);
	const sessionService = inject(SessionService);

	const whiteList: string[] = ['/', '/auth/access'];
	if (loginService.isAuthenticated()) {
		let roles: string = sessionService.user.roles.join();
		let url = state.url;

		return menuService.findByRoles(roles).pipe(
			map((data: Menu[]) => {
				menuService.menu$.next(data);
				if (whiteList.includes(url) || validateUrl(url, data)) {
					return true;
				} else {
					return router.createUrlTree(['/auth/access']);
				}
			})
		);
	}

	return router.createUrlTree(['/auth/login']);
};

const validateUrl = (url: any, menu: any[]) => {
	let flag: boolean = false;
	menu.forEach((menu) => {
		if (menu.url && url.includes(menu.url)) {
			flag = true;
		}
	});
	return flag;
};
