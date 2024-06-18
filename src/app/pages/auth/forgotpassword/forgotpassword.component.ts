import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '@models/user';
import { NewPasswordService } from '@services/newpassword.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
	selector: 'app-forgot',
	standalone: true,
	imports: [
		ButtonModule,
		CommonModule,
		InputTextModule,
		IconFieldModule,
		InputIconModule,
		KeyFilterModule,
		ReactiveFormsModule,
		RouterModule
	],
	templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent {
	private formBuilder = inject(FormBuilder);
	private newpasswordService = inject(NewPasswordService);
	private router = inject(Router);

	form: FormGroup = this.formBuilder.group({
		username: this.formBuilder.control<string>('', { validators: [CustomValidators.identification] })
	});

	onSubmit(): void {
		this.newpasswordService.findByUsername(this.form.value.username).subscribe((user: User) => {
			this.newpasswordService.user.set(user);
			this.router.navigateByUrl('/auth/newpassword');
		});
	}
}
