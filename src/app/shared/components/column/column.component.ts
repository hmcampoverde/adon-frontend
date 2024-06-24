import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Column } from '@interfaces/column';

@Component({
	selector: 'app-column',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './column.component.html',
	styles: ``
})
export class ColumnComponent<T> {
	@Input({ required: true }) public column: Column;
	@Input({ required: true }) public row: any;
	@Input({ required: true }) public type: 'tree' | 'table';
}
