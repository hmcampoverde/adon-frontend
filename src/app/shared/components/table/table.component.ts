import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColumnComponent } from '@components/column/column.component';
import { FilterComponent } from '@components/filter/filter.component';
import { Action } from '@interfaces/action';
import { Column } from '@interfaces/column';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { Menu, MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [
		ButtonModule,
		ColumnComponent,
		CommonModule,
		FormsModule,
		FilterComponent,
		IconFieldModule,
		InputIconModule,
		InputTextModule,
		ListboxModule,
		MenuModule,
		OverlayPanelModule,
		TableModule,
		ToolbarModule
	],
	templateUrl: './table.component.html'
})
export class TableComponent<T> implements OnInit {
	@Input({ required: true }) public columns: Array<Column> = [];
	@Input({ required: true }) public items: Array<T> = [];
	@Input({ required: true }) public dataKey: string;
	@Input({ required: true }) actions: Array<Action> = [];

	public onRowClick = output<{}>();

	public columnsVisibles = signal<Array<Column>>([]);
	public filterFields = computed(() => {
		let filters: Array<string> = [];
		this.columnsVisibles()
			.filter((column) => column.filterGlobal)
			.forEach((column) => {
				filters.push(column.filterField ? column.filterField : column.field);
			});
		return filters;
	});

	@ViewChild('menu') menu!: Menu;
	public menuItems: Array<MenuItem> = [];

	ngOnInit(): void {
		this.columnsVisibles.set(this.columns.filter((column) => column.visible).sort((c1, c2) => c1.index - c2.index));
	}

	public onSelectedColumns(values: Array<Column>): void {
		values = values.sort((c1, c2) => c1.index - c2.index);
		this.columnsVisibles.set(values);
	}

	public ontoggle(event: Event, item: any): void {
		this.menu.toggle(event);
		this.onRowClick.emit(item);
	}

	private setActions(): void {
		this.actions.forEach((action: any) => {
			this.menuItems.push({
				label: action.label,
				icon: action.icon,
				command: () => action.command()
			});
		});
	}
}
