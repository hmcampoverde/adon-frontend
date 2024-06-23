export class User {
	constructor(
		public fullname: string,
		public username: string,
		public password: string,
		public newPassword: string,
		public roles: string[]
	) {}

	static build(value: any) {
		return new User(value['fullname'], value['username'], value['password'], value['newPassword'], value['roles']);
	}
}
