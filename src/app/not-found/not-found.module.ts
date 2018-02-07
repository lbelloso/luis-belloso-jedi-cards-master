import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotFoundComponent } from './not-found.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: NotFoundComponent },
		]),
		SharedModule
	],
	declarations: [
		NotFoundComponent
	]
})
export class NotFoundModule { }
