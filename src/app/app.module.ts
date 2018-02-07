import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { CookieService } from 'ng2-cookies'
import { routes } from './routes'
import { ApiService } from './_shared/services/api.service'
import { AuthService } from './_shared/services/auth.service'
import { AppPopupComponent } from './_shared/components/app-popup/app-popup.component'
import { SharedModule } from './_shared/shared.module'
import { AlertService } from './_shared/services/alert.service'

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		RouterModule.forRoot(routes),
		HttpClientModule,
		BrowserModule,
		SharedModule
	],
	providers: [
		ApiService,
		AuthService,
		CookieService,
		AlertService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
