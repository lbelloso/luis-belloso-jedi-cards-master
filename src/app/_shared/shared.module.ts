import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppPopupComponent } from './components/app-popup/app-popup.component'
import { FormsModule } from '@angular/forms'
import { AppAlertComponent } from './components/app-alert/app-alert.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		AppPopupComponent,
		AppAlertComponent
	],
	exports: [
		FormsModule,
		CommonModule,
		AppPopupComponent,
		AppAlertComponent
	]
})
export class SharedModule { }
