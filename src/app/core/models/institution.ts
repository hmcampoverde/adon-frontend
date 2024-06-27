export class Institution {
	constructor(
		public id: number,
		public name: string,
		public amie: string,
		public phone: string,
		public email: string,
		public address: string
	) {}

	public static build(value: any): Institution {
		return new Institution(value['id'], value['name'], value['amie'], value['phone'], value['email'], value['address']);
	}
}
