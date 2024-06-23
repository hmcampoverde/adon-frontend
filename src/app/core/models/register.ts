export class Register {
	constructor(
		public firstname: string,
		public lastname: string,
		public identification: string,
		public emailInstitutional: string,
		public newPassword: string
	) {}

	static build(value: any): Register {
		return new Register(
			value['firstname'],
			value['lastname'],
			value['identification'],
			value['emailInstitutional'],
			value['newPassword']
		);
	}
}
