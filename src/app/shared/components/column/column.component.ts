import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Column } from '@interfaces/column';
import { ModelPipe } from '@pipes/model.pipe';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
	selector: 'app-column',
	standalone: true,
	imports: [CommonModule, InputSwitchModule, FormsModule, ModelPipe],
	templateUrl: './column.component.html'
})
export class ColumnComponent<T> {
	@Input({ required: true }) public column: Column;
	@Input({ required: true }) public row: any;
	@Input({ required: true }) public type: 'tree' | 'table';
}
