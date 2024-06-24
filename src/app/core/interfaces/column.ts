export interface Column {
	index: number;
	header: string;
	classHeader?: string[];
	styleHeader?: object;
	field: string;
	classField?: string[];
	styleField?: {};
	type: 'text' | 'boolean' | 'date' | 'datetime' | 'time' | 'icon' | 'color' | 'badge' | 'model';
	sort: boolean;
	filter: boolean;
	filterField?: string;
	filterType?: 'text' | 'numeric' | 'boolean' | 'date';
	filterGlobal: boolean;
	visible: boolean;
}
