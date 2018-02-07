import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { AuthService } from './_shared/services/auth.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

	private readonly loginUrl = '/login'
	private readonly signinUrl = '/signin'
	private readonly decksUrl = '/decks'
	private readonly aboutUrl = '/'
	private readonly notFoundUrl = '/404'

	constructor(
		private _router: Router,
		private _auth: AuthService
	) {}

	ngOnInit() {
		this._router.events
			.subscribe( event => {
				if (event instanceof NavigationStart) {
					const { url } = event
					const isLogged = this._auth.isLogged()
					if (url === this.aboutUrl || url === this.notFoundUrl) return
					if (url === this.loginUrl || url === this.signinUrl) {
						if (isLogged) {
							this._router.navigateByUrl(this.decksUrl)
						}
					}
					else if (!isLogged) {
						this._router.navigateByUrl(this.loginUrl)
					}
				}
			})
	}
}
