import { Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { SessionService } from './../../core/services/session.service';
import { AppSidebarComponent } from './app.sidebar.component';
import { LayoutService } from './service/app.layout.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {
	@ViewChild('menubutton') menuButton!: ElementRef;

	@ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

	private sessionService = inject(SessionService);
	private loginService = inject(LoginService);
	private router = inject(Router);

	public fullname = computed(() => {
		return this.sessionService.user.fullname;
	});

	constructor(
		public layoutService: LayoutService,
		public el: ElementRef
	) {}

	onLogout(): void {
		this.loginService.logout();
		this.router.navigate(['/auth/login']);
	}
	onMenuButtonClick() {
		this.layoutService.onMenuToggle();
	}

	onProfileButtonClick() {
		this.layoutService.showRightMenu();
	}

	onSearchClick() {
		this.layoutService.toggleSearchBar();
	}

	onRightMenuClick() {
		this.layoutService.showRightMenu();
	}

	get logo() {
		const logo =
			this.layoutService.config().menuTheme === 'white' || this.layoutService.config().menuTheme === 'orange'
				? 'dark'
				: 'white';
		return logo;
	}
}
