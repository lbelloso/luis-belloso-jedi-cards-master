import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SigninComponent } from './signin.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: SigninComponent },
		]),
		SharedModule
	],
	declarations: [SigninComponent]
})
export class SigninModule { }
