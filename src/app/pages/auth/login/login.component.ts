import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '@services/login.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ButtonModule, InputTextModule, KeyFilterModule, PasswordModule, ReactiveFormsModule, RouterModule],
	templateUrl: './login.component.html'
})
export class LoginComponent {
	private formBuilder = inject(FormBuilder);
	private router = inject(Router);

	private loginService = inject(LoginService);

	form: FormGroup = this.formBuilder.group({
		username: this.formBuilder.control<string>('', { validators: CustomValidators.identificationInvalid }),
		password: this.formBuilder.control<string>('', { validators: Validators.required })
	});

	onSubmit(): void {
		if (this.form.valid) {
			this.loginService.login(this.form.value).subscribe(() => this.router.navigateByUrl('/'));
		}
	}
}
