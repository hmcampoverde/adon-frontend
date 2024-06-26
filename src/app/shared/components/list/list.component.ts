import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultService } from '@services/default.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [],
	template: ``
})
export class ListComponent<T> implements OnInit {
	protected settings: any;
	protected route: string = '/';
	protected items: Array<T> = [];
	protected item: any;

	protected router = inject(Router);
	protected service: DefaultService<T>;

	protected confirmationService = inject(ConfirmationService);
	protected messageService = inject(MessageService);

	ngOnInit(): void {
		this.service.findAll().subscribe((items) => (this.items = items));
	}

	protected rowClick(data: any) {
		this.item = data.item;
		switch (data.action) {
			case 'create':
				this.create();
				break;
			case 'update':
				this.update();
				break;
			case 'remove':
				this.remove();
				break;
		}
	}

	protected create(): void {
		this.router.navigate([`${this.route}/create`]);
	}

	protected update(): void {
		if (this.item) {
			this.router.navigate([`${this.route}/update/${this.item.id}`]);
		}
	}

	protected remove(): void {
		this.confirmationService.confirm({
			message: 'Desea eliminar el registro seleccionado?',
			header: 'Confirmación de Eliminación',
			icon: 'pi pi-exclamation-triangle',
			accept: () => {
				this.service.deleteById(this.item.id).subscribe({
					next: (response) => {
						this.messageService.add(response);
						this.items = this.items.filter((item: any) => item.id !== this.item.id);
					}
				});
			}
		});
	}
}
