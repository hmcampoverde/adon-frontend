import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SaveComponent as Save } from '@components/save/save.component';
import { Employee } from '@models/employee';
import { EmployeeService } from '@services/employee.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
	selector: 'app-save',
	standalone: true,
	imports: [
		AccordionModule,
		AvatarModule,
		ButtonModule,
		CardModule,
		InputMaskModule,
		InputSwitchModule,
		InputTextModule,
		PanelModule,
		ReactiveFormsModule,
		RouterModule
	],
	templateUrl: './save.component.html'
})
export class SaveComponent extends Save<Employee> implements OnInit {
	public override service = inject(EmployeeService);
	public override route: string = '/employee';

	public override form: FormGroup = this.formBuilder.group({
		firstname: this.formBuilder.control<string>('', { validators: Validators.required }),
		lastname: this.formBuilder.control<string>('', { validators: Validators.required }),
		identification: this.formBuilder.control<string>('', { validators: CustomValidators.identificationInvalid }),
		mobil: this.formBuilder.control<string>('', { validators: Validators.required }),
		emailPersonal: this.formBuilder.control<string>('', { validators: [Validators.required, Validators.email] }),
		emailInstitutional: this.formBuilder.control<string>('', { validators: [Validators.required, Validators.email] }),
		address: this.formBuilder.control<string>('', { validators: Validators.required }),
		institution: this.formBuilder.control<string>(''),
		manager: this.formBuilder.control<boolean>(false, { validators: Validators.required })
	});

	ngOnInit(): void {
		this.findById();
	}
}
