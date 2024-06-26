import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-error',
	standalone: true,
	imports: [ButtonModule, RouterLink],
	templateUrl: './error.component.html'
})
export class ErrorComponent {}
