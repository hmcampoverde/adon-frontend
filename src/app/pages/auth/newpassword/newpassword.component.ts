import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '@models/user';
import { NewPasswordService } from '@services/newpassword.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
	selector: 'app-newpassword',
	standalone: true,
	imports: [ButtonModule, CommonModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule],
	templateUrl: './newpassword.component.html'
})
export class NewpasswordComponent {
	private formBuilder = inject(FormBuilder);
	private newPasswordService = inject(NewPasswordService);
	protected messageService = inject(MessageService);

	private router = inject(Router);

	form: FormGroup = this.formBuilder.group(
		{
			fullname: this.formBuilder.control<string>('', { validators: [Validators.required] }),
			username: this.formBuilder.control<string>(''),
			newPassword: this.formBuilder.control<string>('', { validators: [CustomValidators.passwordInvalid] }),
			confirmPassword: this.formBuilder.control<string>('', { validators: [Validators.required] })
		},
		{ validators: CustomValidators.passMatch as ValidatorFn }
	);

	constructor() {
		effect(() => {
			const currentUser: User = this.newPasswordService.user();
			if (currentUser) this.form.patchValue(currentUser);
			else this.router.navigateByUrl('/');
		});
	}

	onSubmit(): void {
		this.newPasswordService.updatePassword(this.form.value).subscribe({
			next: (message: Message) => {
				this.messageService.add(message);
				this.router.navigateByUrl('/');
			}
		});
	}
}
