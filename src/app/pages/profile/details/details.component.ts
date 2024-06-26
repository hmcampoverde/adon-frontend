import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Employee } from '@models/employee';

@Component({
	selector: 'app-details',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './details.component.html'
})
export class DetailsComponent {
	public src = signal<string | undefined>(undefined);

	@Input({ required: true })
	profile: Employee;
}
