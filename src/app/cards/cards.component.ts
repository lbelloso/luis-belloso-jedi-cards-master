// tslint:disable:indent
import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AlertService } from '../_shared/services/alert.service'
import { ApiService } from '../_shared/services/api.service'
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component'
import Deck from '../_models/deck.model'
import Card from '../_models/card.model'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  deck: Deck = new Deck()
  cards: Array<Card> = new Array<Card>()
  card: Card = new Card()
  isLoading = true
  num_cards = 0
  private cardToDeleteId: string


  constructor(
      private _api: ApiService,
      private _router: Router,
      private _alert: AlertService,
      private _route: ActivatedRoute
  ) { }

  @ViewChild('deletePopup') deletePopup: AppPopupComponent

  ngOnInit() {
		this._route.params.subscribe(p => {
      this.deck.id = p.id
      this.deck.title  = p.title
    }
  )
    this._api
      .getCards()
      .then(d => {
        for (const entry of d) {
          if (entry.deck_id && this.deck.id === entry.deck_id.toString()) {
            this.cards[this.num_cards] = new Card()
            this.cards[this.num_cards].value = entry.value
            this.cards[this.num_cards].id = entry.id
            this.cards[this.num_cards].image = entry.image
            this.cards[this.num_cards].suit = entry.suit
            this.cards[this.num_cards].deck_id = entry.deck_id.toString()
            this.num_cards++
          }
      }
        this.isLoading = false


    })
    }
    onDeleteCard(id: string, event: MouseEvent) {
      console.log(id)
      this.deletePopup.openPopup()
      this.cardToDeleteId = id
    }
    onAcceptDelete() {
      this._api.deleteCard(this.cardToDeleteId)
        .then(() => {
          const i = this.cards.findIndex(d => d.id === this.cardToDeleteId)
          this.cards.splice(i, 1)
          this._alert.info('Carta borrado con éxito.')
        })
        .catch(() => this._alert.error('Ha ocurrido algún error inesperado.'))
    }
}
