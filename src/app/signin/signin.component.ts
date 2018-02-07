import { Component } from '@angular/core'
import User from '../_models/user.model'
import { ApiService } from '../_shared/services/api.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.less']
})
export class SigninComponent {

	private readonly decksUrl = '/decks'

	user: User = new User()
	passwordRepeat = ''

	isLoading = false

	constructor(
		private _api: ApiService,
		private _router: Router
	) {}

	onSend() {
		this.isLoading = true
		this._api
			.signin(this.user)
			.then(response => {
				this.isLoading = false
				this._router.navigateByUrl(this.decksUrl)
			})
			.catch(error => {
				console.log(error)
				this.isLoading = false
			})
	}

	isFormSendable(isValid: boolean) {
		return isValid && this.arePasswordsEqual() && !this.isLoading
	}

	arePasswordsEqual() {
		return this.user.password === this.passwordRepeat
	}
}
