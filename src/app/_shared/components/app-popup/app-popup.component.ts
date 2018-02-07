import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-popup',
	templateUrl: './app-popup.component.html',
	styleUrls: ['./app-popup.component.less']
})
export class AppPopupComponent {

	isOpen = false

	@Input() popupTitle: string
	@Input() buttonTitles: string[] = ['Cancelar', 'Aceptar']

	@Output() accept = new EventEmitter<any>()

	openPopup() {
		this.isOpen = true
	}

	closePopup() {
		this.isOpen = false
	}

	onAccept() {
		this.accept.emit()
		this.closePopup()
	}
}
