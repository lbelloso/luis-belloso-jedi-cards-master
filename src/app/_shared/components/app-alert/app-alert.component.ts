import { Component, OnInit } from '@angular/core';
import Alert from '../../../_models/alert.model'
import { AlertService } from '../../services/alert.service'
import { AlertType } from '../../../_models/alert.model'

@Component({
	selector: 'app-alert',
	templateUrl: './app-alert.component.html',
	styleUrls: ['./app-alert.component.less']
})
export class AppAlertComponent implements OnInit {

	private readonly msToDisappear = 2000

	alert: Alert
	isVisible = false

	constructor(
		private _alert: AlertService
	) { }

	ngOnInit() {
		this._alert.alerts.subscribe(a => {
			this.alert = a
			this.isVisible = true
			setTimeout(() => this.isVisible = false, this.msToDisappear)
		})
	}

	getAlertClass() {
		if (this.alert.type === AlertType.Error) return 'error'
		return 'info'
	}
}
