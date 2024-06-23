import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-accessdenied',
	standalone: true,
	imports: [ButtonModule, RouterModule],
	templateUrl: './accessdenied.component.html'
})
export class AccessdeniedComponent {}
