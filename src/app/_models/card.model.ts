import Deck from './deck.model'

// tslint:disable:indent
export default class Card {

	id: string
	deck: Deck

	constructor(
        public value: string = '',
        public suit: string = '',
        public image: string = '',
		public deck_id: string = ''
	) {}
}
