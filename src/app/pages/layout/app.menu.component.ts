import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Menu } from '@models/menu';
import { map } from 'rxjs';
import { MenuService } from '../../core/services/menu.service';

@Component({
	selector: 'app-menu',
	templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {
	private menuService = inject(MenuService);
	public model = toSignal(this.menuService.menu$.pipe(map((menus) => this.buildModel(menus))));

	private buildModel(menus: Menu[]): any[] {
		let model: Array<any> = [];

		let home = this.buildSubMenu(new Menu(0, 'Home', true, 'pi pi-home', '/', null));
		home.items.push(this.buildMenuItem(new Menu(0, 'Dashboard', true, 'pi pi-fw pi-chart-bar', '/', home)));
		model.push(home);

		menus
			.filter((menu: Menu) => menu.left)
			.forEach((menu: Menu) => {
				if (!menu.parent) {
					let subMenu = this.buildMenu(menus, menu);
					model.push(subMenu);
				}
			});

		return model;
	}

	private buildMenu(menus: Menu[], menu: Menu): any {
		if (this.hasChildren(menus, menu)) {
			let subMenu = this.buildSubMenu(menu);
			menus.forEach((item) => {
				if (item.parent && item.parent.id === menu.id) {
					if (this.hasChildren(menus, item)) {
						subMenu.items.push(this.buildMenu(menus, item));
					} else {
						let menuItem = this.buildMenuItem(item);
						subMenu.items.push(menuItem);
					}
				}
			});
			return subMenu;
		} else {
			return this.buildMenuItem(menu);
		}
	}

	buildSubMenu(menu: Menu): any {
		return { label: menu.name, icon: menu.icon, routerLink: menu.url, items: [] };
	}

	buildMenuItem(menu: Menu): any {
		return { label: menu.name, icon: menu.icon, routerLink: [menu.url] };
	}

	private hasChildren(menus: Menu[], menu: Menu): boolean {
		return menus.filter((item: any) => item.parent && item.parent.id === menu.id).length > 0;
	}
}
