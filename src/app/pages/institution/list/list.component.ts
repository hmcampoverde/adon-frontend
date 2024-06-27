import { Component, inject } from '@angular/core';
import { ListComponent as List } from '@components/list/list.component';
import { TableComponent } from '@components/table/table.component';
import { Institution } from '@models/institution';
import { InstitutionService } from '@services/institution.service';
import { CardModule } from 'primeng/card';
import { Settings } from './institution.setting';

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [CardModule, TableComponent],
	templateUrl: './list.component.html'
})
export class ListComponent extends List<Institution> {
	public override route: string = '/institution';
	public override service = inject(InstitutionService);
	public override settings = Settings;
}
