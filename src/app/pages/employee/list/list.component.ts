import { Component, OnInit, inject } from '@angular/core';
import { ListComponent as List } from '@components/list/list.component';
import { TableComponent } from '@components/table/table.component';
import { Employee } from '@models/employee';
import { EmployeeService } from '@services/employee.service';
import { CardModule } from 'primeng/card';
import { Settings } from './employee.setting';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [CardModule, TableComponent],
	templateUrl: './list.component.html'
})
export class ListComponent extends List<Employee> implements OnInit {
	public override route: string = '/employee';

	public override service = inject(EmployeeService);
	public override settings = Settings;
}
