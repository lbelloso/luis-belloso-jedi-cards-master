// tslint:disable:indent
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from '../_shared/services/api.service'
import Deck from '../_models/deck.model'
import Card from '../_models/card.model'
import { AlertService } from '../_shared/services/alert.service'

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.less']
})

export class CardDetailComponent implements OnInit {

  private readonly cardsUrl = '/card'
  private readonly decksUrl = '/decks'
  deck: Deck = new Deck()
  card: Card = new Card()


  constructor(
    private _api: ApiService,
    private _router: Router,
    private _alert: AlertService,
    private _route: ActivatedRoute
  ) { }

	ngOnInit() {
		this._route.params.subscribe(p => {
      this.deck.id = p.id
      this.deck.title  = p.title
			if ( this.deck.id) {
        this.card.deck_id = this.deck.id
      }
      if (p.id_card) {
        this._api
					.getCards()
					.then(d => {
            const i = d.findIndex(value => value.id.toString() === p.id_card)
            this.card = d[i]
          })
      }
		})
	}
	onSend() {
		this._api[this.card.id ? 'putCard' : 'postCard'](this.card)
			.then(() => {
				this._router.navigateByUrl(this.decksUrl)
				this._alert.info('Datos guardados con éxito.')
			})
			.catch(() => this._alert.error('Ha ocurrido algún error inesperado.'))
	}
}
