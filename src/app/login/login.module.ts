import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../_shared/shared.module'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: LoginComponent },
		]),
		SharedModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
