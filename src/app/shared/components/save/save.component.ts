import { Component, inject, input } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { DefaultService } from '@services/default.service';
import { Message, MessageService } from 'primeng/api';

@Component({
	selector: 'app-save',
	template: ``
})
export class SaveComponent<T> {
	protected route: string = '/';
	protected creation: boolean = true;
	protected id = input<number>(0);
	protected form!: FormGroup;

	protected readonly formBuilder = inject(NonNullableFormBuilder);

	protected service: DefaultService<T>;
	protected messageService = inject(MessageService);

	onReset(): void {
		this.form.reset();
	}

	protected onSave(): void {
		if (this.form.valid) {
			if (this.creation) {
				this.create(this.form.value);
			} else {
				this.update(+this.id(), this.form.value);
			}
		}
	}

	protected findById(): void {
		if (this.id()) {
			this.service.findById(this.id()).subscribe({
				next: (t: T) => {
					this.form.patchValue(t);
					this.creation = false;
				}
			});
		}
	}

	protected create(t: T): void {
		this.service.create(t).subscribe({
			next: (message: Message) => {
				this.messageService.add(message);
				this.onReset();
			}
		});
	}

	protected update(id: number, t: T): void {
		if (id) {
			this.service.update(id, t).subscribe({
				next: (message: Message) => {
					this.messageService.add(message);
				}
			});
		}
	}
}
