import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ConfirmDialogModule, NgxSpinnerModule, ToastModule, RouterOutlet],
	templateUrl: './app.component.html'
})
export class AppComponent {}
