import { Action } from '@interfaces/action';
import { Column } from '@interfaces/column';

const columns: Array<Column> = [
	{
		index: 0,
		header: 'Nombres',
		styleHeader: { 'min-width': '200px' },
		field: 'firstname',
		type: 'text',
		sort: true,
		filter: true,
		filterField: 'firstname',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 1,
		header: 'Apellidos',
		styleField: { 'min-width': '200px' },
		field: 'lastname',
		type: 'text',
		sort: true,
		filter: true,
		filterField: 'lastname',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 2,
		header: 'Identificación',
		styleField: { 'min-width': '150px' },
		field: 'identification',
		type: 'text',
		sort: false,
		filter: true,
		filterField: 'identification',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 3,
		header: 'Celular',
		styleField: { 'min-width': '150px' },
		field: 'mobil',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	},
	{
		index: 4,
		header: 'Email Institucional',
		styleField: { 'min-width': '200px' },
		field: 'emailInstitutional',
		type: 'text',
		sort: false,
		filter: true,
		filterField: 'emailInstitutional',
		filterType: 'text',
		filterGlobal: true,
		visible: true
	},
	{
		index: 5,
		header: 'Email Personal',
		styleField: { 'min-width': '200px' },
		field: 'emailPersonal',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	},
	{
		index: 6,
		header: 'Dirección',
		styleField: { 'min-width': '250px' },
		field: 'address',
		type: 'text',
		sort: false,
		filter: false,
		filterGlobal: false,
		visible: true
	}
];

const actions: Array<Action> = [];

export const Settings = {
	actions: actions,
	columns: columns,
	datakey: 'id'
};
