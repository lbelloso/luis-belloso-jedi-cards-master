import { Routes } from '@angular/router'

export const routes: Routes = [
	{ path: '', loadChildren: './about/about.module#AboutModule' },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	{ path: 'signin', loadChildren: './signin/signin.module#SigninModule' },
	{ path: 'decks', loadChildren: './decks/decks.module#DecksModule' },
	{ path: 'deck', loadChildren: './deck-detail/deck-detail.module#DeckDetailModule' },
	{ path: 'card', loadChildren: './card-detail/card-detail.module#CardDetailModule' },
	{ path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
	{ path: '404', loadChildren: './not-found/not-found.module#NotFoundModule' },
	{ path: '**', redirectTo: '404', pathMatch: 'full' }
]
