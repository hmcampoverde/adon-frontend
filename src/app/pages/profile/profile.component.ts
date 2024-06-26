import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '@models/profile';
import { User } from '@models/user';
import { NewPasswordService } from '@services/newpassword.service';
import { ProfileService } from '@services/profile.service';
import { SessionService } from '@services/session.service';
import { CustomValidators } from '@validators/custom-validators.validators';
import { Message, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { DetailsComponent } from './details/details.component';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [
		AvatarModule,
		ButtonModule,
		CardModule,
		DetailsComponent,
		KeyFilterModule,
		InputTextModule,
		InputMaskModule,
		InputSwitchModule,
		PasswordModule,
		PanelModule,
		ReactiveFormsModule
	],
	templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
	private readonly formBuilder = inject(NonNullableFormBuilder);
	private router = inject(Router);

	private newPasswordService = inject(NewPasswordService);
	private messageService = inject(MessageService);
	private profileService = inject(ProfileService);
	private sessionService = inject(SessionService);

	public form: FormGroup = this.formBuilder.group({
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

	public formReset: FormGroup = this.formBuilder.group(
		{
			password: this.formBuilder.control<string>('', { validators: CustomValidators.passwordInvalid }),
			newPassword: this.formBuilder.control<string>('', { validators: CustomValidators.passwordInvalid }),
			confirmPassword: this.formBuilder.control<string>('')
		},
		{ validators: CustomValidators.passMatch as ValidatorFn }
	);

	ngOnInit(): void {
		this.profileService.findByIdentification(this.sessionService.user.username).subscribe({
			next: (profile: Profile) => this.form.patchValue(profile),
			error: (response) => {
				if (response.status === 404) this.router.navigate(['error']);
			}
		});
	}

	public onSubmit(): void {
		this.profileService
			.updateProfile(this.sessionService.user.username, Profile.build(this.form.value))
			.subscribe({ next: (message: Message) => this.messageService.add(message) });
	}

	public onResetPassword(): void {
		const user: User = { ...this.formReset.value, username: this.sessionService.user.username };
		this.newPasswordService.updatePassword(user).subscribe({
			next: (message: Message) => {
				this.messageService.add(message);
				this.formReset.reset();
			}
		});
	}
}
