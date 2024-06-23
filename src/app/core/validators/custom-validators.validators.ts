import { AbstractControl, ValidationErrors } from '@angular/forms';

const patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8}/;

export class CustomValidators {
	static identificationInvalid(control: AbstractControl<string>): ValidationErrors | null {
		return !CustomValidators.identificationValidator(control.value) ? { identificationInvalid: true } : null;
	}

	static passwordInvalid(control: AbstractControl<string>): ValidationErrors | null {
		return !patternPassword.test(control.value) ? { passwordInvalid: true } : null;
	}

	static passMatch(
		formGroup: AbstractControl<{ newPassword: string; confirmPassword: string }>
	): ValidationErrors | null {
		const newPassword = formGroup.value.newPassword;
		const confirmPassword = formGroup.value.confirmPassword;

		if (newPassword !== confirmPassword) {
			formGroup.get('confirmPassword').setErrors({ required: true });
		}
		return newPassword !== confirmPassword ? { passwordMatching: true } : null;
	}

	private static identificationValidator(identification: string): boolean {
		let success = false;
		if (identification.length == 10) {
			let thirdDigit = parseInt(identification.substring(2, 3));
			if (thirdDigit < 6) {
				let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
				let verificator = parseInt(identification.substring(9, 10));
				let sum: number = 0;
				let digit: number = 0;
				for (let i = 0; i < identification.length - 1; i++) {
					digit = parseInt(identification.substring(i, i + 1)) * coefValCedula[i];
					sum += parseInt((digit % 10) + '') + parseInt(digit / 10 + '');
				}
				sum = Math.round(sum);
				if (Math.round(sum % 10) == 0 && Math.round(sum % 10) == verificator) {
					success = true;
				}
				if (10 - Math.round(sum % 10) == verificator) {
					success = true;
				}
			}
		}
		return success;
	}
}
