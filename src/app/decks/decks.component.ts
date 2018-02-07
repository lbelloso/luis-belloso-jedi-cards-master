import { Component, OnInit, ViewChild } from '@angular/core'
import { ApiService } from '../_shared/services/api.service'
import Deck from '../_models/deck.model'
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component'
import { AlertService } from '../_shared/services/alert.service'

@Component({
	selector: 'app-decks',
	templateUrl: './decks.component.html',
	styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

	decks: Deck[] = []
	isLoading = true

	private deckToDeleteId: string

	constructor(
		private _api: ApiService,
		private _alert: AlertService
	) {}

	@ViewChild('deleteCardPopup') deleteCardPopup: AppPopupComponent

	ngOnInit() {
		this._api
			.getDecks()
			.then(d => {
				this.isLoading = false
				this.decks = d
			})
	}

	onDeleteDeck(id: string, event: MouseEvent) {
		this.deleteCardPopup.openPopup()
		this.deckToDeleteId = id
		event.stopPropagation()
	}

	onAcceptDelete() {
		this._api.deleteDeck(this.deckToDeleteId)
			.then(() => {
				const i = this.decks.findIndex(d => d.id === this.deckToDeleteId)
				this.decks.splice(i, 1)
				this._alert.info('Mazo borrado con éxito.')
			})
			.catch(() => this._alert.error('Ha ocurrido algún error inesperado.'))
	}
}
