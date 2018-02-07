import { NgModule } from '@angular/core'
import { DeckDetailComponent } from './deck-detail.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'create', component: DeckDetailComponent },
			{ path: ':id', component: DeckDetailComponent },
		]),
		SharedModule
	],
	declarations: [DeckDetailComponent]
})
export class DeckDetailModule { }
