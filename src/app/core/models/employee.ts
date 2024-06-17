export class Employee {
	constructor(
		public id: number,
		public firstname: string,
		public lastname: string,
		public identification: string,
		public mobil: string,
		public emailPersonal: string,
		public emailInstitutional: string,
		public address: string,
		public institution: string,
		public manager: boolean
	) {}

	static build(value: any): Employee {
		return new Employee(
			value['id'],
			value['firstname'],
			value['lastname'],
			value['identification'],
			value['mobil'],
			value['emailPersonal'],
			value['emailInstitutional'],
			value['address'],
			value['institution'],
			value['manager']
		);
	}
}
