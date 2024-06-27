import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SaveComponent as Save } from '@components/save/save.component';
import { Institution } from '@models/institution';
import { InstitutionService } from '@services/institution.service';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
	selector: 'app-save',
	standalone: true,
	imports: [
		AvatarModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		InputMaskModule,
		PanelModule,
		ReactiveFormsModule,
		RouterLink
	],
	templateUrl: './save.component.html'
})
export class SaveComponent extends Save<Institution> implements OnInit {
	public override route: string = '/institution';
	public override service = inject(InstitutionService);
	public override form: FormGroup = this.formBuilder.group({
		name: this.formBuilder.control<string>('', { validators: Validators.required }),
		amie: this.formBuilder.control<string>('', { validators: Validators.required }),
		phone: this.formBuilder.control<string>('', { validators: Validators.required }),
		email: this.formBuilder.control<string>('', { validators: [Validators.required, Validators.email] }),
		address: this.formBuilder.control<string>('', { validators: Validators.required })
	});

	ngOnInit(): void {
		this.findById();
	}
}
