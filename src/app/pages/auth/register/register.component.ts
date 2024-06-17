import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Register } from '@models/register';
import { RegisterService } from '@services/register.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [ButtonModule, InputTextModule, KeyFilterModule, PasswordModule, ReactiveFormsModule, RouterLink],
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	private readonly formBuilder = inject(FormBuilder);
	private registerService = inject(RegisterService);
	private messageService = inject(MessageService);

	private router = inject(Router);

	public form = this.formBuilder.group(
		{
			firstname: this.formBuilder.control<string>('', { validators: Validators.required }),
			lastname: this.formBuilder.control<string>('', { validators: Validators.required }),
			identification: this.formBuilder.control<string>('', { validators: CustomValidators.identification }),
			emailInstitutional: this.formBuilder.control<string>('', { validators: [Validators.required, Validators.email] }),
			password: this.formBuilder.control<string>('', { validators: CustomValidators.password }),
			confirmPassword: this.formBuilder.control<string>('', { validators: Validators.required })
		},
		{ validators: CustomValidators.passMatch as ValidatorFn }
	);

	onSubmit(): void {
		this.registerService.register(Register.build(this.form.value)).subscribe({
			next: (message: Message) => {
				this.messageService.add(message);
				this.router.navigateByUrl('/');
			}
		});
	}
}
