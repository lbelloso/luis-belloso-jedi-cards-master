import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DecksComponent } from './decks.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: DecksComponent },
		]),
		SharedModule
	],
	declarations: [DecksComponent]
})
export class DecksModule { }
