export class Profile {
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
		public manager: boolean,
		public password: string
	) {}

	public static build(value: any): Profile {
		return new Profile(
			value['id'],
			value['firstname'],
			value['lastname'],
			value['identification'],
			value['mobil'],
			value['emailPersonal'],
			value['emailInstitutional'],
			value['address'],
			value['institution'],
			value['manager'],
			value['password']
		);
	}
}
