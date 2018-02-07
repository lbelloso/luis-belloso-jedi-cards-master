import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import Alert from '../../_models/alert.model'
import { AlertType } from '../../_models/alert.model'

@Injectable()
export class AlertService {

	private alertSubject = new Subject<Alert>()

	alerts = this.alertSubject.asObservable()

	info (message: string = '', title: string = 'Atención:') {
		const alert = new Alert(title, message, AlertType.Info)
		this.alertSubject.next(alert)
	}

	error (message: string = '', title: string = 'Error:') {
		const alert = new Alert(title, message)
		this.alertSubject.next(alert)
	}
}
