import { Action } from '@interfaces/action';
import { Column } from '@interfaces/column';

const columns: Array<Column> = [
	{
		index: 0,
		header: 'Nombre',
		field: 'name',
		type: 'text',
		sort: true,
		filter: true,
		filterField: 'name',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 1,
		header: 'Amie',
		field: 'amie',
		type: 'text',
		sort: true,
		filter: true,
		filterField: 'amie',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 2,
		header: 'Teléfono',
		field: 'phone',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	},
	{
		index: 3,
		header: 'Email',
		field: 'email',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	},
	{
		index: 4,
		header: 'Dirección',
		field: 'address',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	}
];

const actions: Array<Action> = [];

export const Settings: any = {
	actions: actions,
	columns: columns,
	datakey: 'id'
};
