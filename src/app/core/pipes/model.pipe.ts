import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'model',
	standalone: true
})
export class ModelPipe implements PipeTransform {
	transform(value: any, property: string): string {
		return this.getValue(value, property);
	}

	getValue(value: any, property: string): any {
		let properties: any[] = property.split('.');
		if (value) {
			if (properties.length > 1) {
				value = value[properties[0]];
				let properties_: any[] = [];
				for (let i = 1; i < properties.length; i++) {
					properties_.push(properties[i]);
				}
				property = properties_.join('.');
				return this.getValue(value, property);
			} else {
				return value[properties[0]];
			}
		}
	}
}
