import { Component, Input, computed, output } from '@angular/core';
import { Column } from '@interfaces/column';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
	selector: 'app-filter',
	standalone: true,
	imports: [ButtonModule, InputTextModule],
	templateUrl: './filter.component.html'
})
export class FilterComponent {
	@Input({ required: true }) public columns: Array<Column> = [];

	public onKeyUp = output<string>();
	public onClearClick = output<string>();

	public placeholder = computed(() => {
		let placeHolderItem: Array<string> = [];
		this.columns
			.filter((column) => column.filterGlobal)
			.forEach((column) => {
				placeHolderItem.push(column.header);
			});
		return 'Buscar por '.concat(placeHolderItem.join(', ').toLocaleLowerCase());
	});
}
