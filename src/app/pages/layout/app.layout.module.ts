import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppFooterComponent } from './app.footer.component';
import { AppLayoutComponent } from './app.layout.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppRightMenuComponent } from './app.rightmenu.component';
import { AppSearchComponent } from './app.search.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppConfigModule } from './config/app.config.module';

@NgModule({
	declarations: [
		AppLayoutComponent,
		AppBreadcrumbComponent,
		AppSidebarComponent,
		AppTopbarComponent,
		AppRightMenuComponent,
		AppMenuComponent,
		AppMenuitemComponent,
		AppSearchComponent,
		AppFooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AvatarModule,
		HttpClientModule,
		BrowserAnimationsModule,
		InputTextModule,
		SidebarModule,
		BadgeModule,
		RadioButtonModule,
		InputSwitchModule,
		ButtonModule,
		TooltipModule,
		RippleModule,
		MenuModule,
		RouterModule,
		DropdownModule,
		DividerModule,
		AppConfigModule,
		DialogModule,
		StyleClassModule
	]
})
export class AppLayoutModule {}
