import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AvatarModule, ButtonModule, ConfirmDialogModule, NgxSpinnerModule, ToastModule, RouterOutlet],
	templateUrl: './app.component.html'
})
export class AppComponent {
	visible: boolean = false;
	constructor(private messageService: MessageService) {}

	onConfirm() {
		this.messageService.clear('confirm');
		this.visible = false;
	}

	onReject() {
		this.messageService.clear('confirm');
		this.visible = false;
	}
}
