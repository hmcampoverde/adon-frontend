export class Menu {
	constructor(
		public id: number,
		public name: string,
		public left: boolean,
		public icon: string,
		public url: string,
		public parent: Menu
	) {}
}
