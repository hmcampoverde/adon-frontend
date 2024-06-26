import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppConfigModule } from '@layout/config/app.config.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
	selector: 'app-auth',
	standalone: true,
	imports: [AppConfigModule, PasswordModule, InputTextModule, ButtonModule, RouterLink, RouterOutlet],
	templateUrl: './auth.component.html'
})
export class AuthComponent {}
