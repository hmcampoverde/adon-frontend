import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-notfound',
	standalone: true,
	imports: [ButtonModule, RouterModule],
	templateUrl: './notfound.component.html'
})
export class NotfoundComponent {}
