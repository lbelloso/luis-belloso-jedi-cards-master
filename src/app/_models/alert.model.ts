export default class Alert {

	constructor(
		public title: string = '',
		public message: string = '',
		public type: AlertType = AlertType.Error
	) {}

}

export enum AlertType {
	Info,
	Error
}
