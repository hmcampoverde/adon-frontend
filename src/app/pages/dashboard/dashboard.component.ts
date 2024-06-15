import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [ButtonModule, InputTextModule],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent {}
