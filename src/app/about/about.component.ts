import { Component } from '@angular/core'
import SocialLink from '../_models/social-link.model'
import AboutProject from '../_models/about-project.model'
import AboutAuthor from '../_models/about-author.model'

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.less']
})
export class AboutComponent {
	aboutProject: AboutProject = new AboutProject(
		'Jedi Card Api',
		'The project from the Angular 5 course',
		'Blablabla I am a description'
	)

	aboutAuthor: AboutAuthor = new AboutAuthor(
		'Blai',
		'Samitier',
		'Front End Developer @ Itèquia',
		[
			new SocialLink('Linkedin', 'https://es.linkedin.com/in/samitier'),
			new SocialLink('GitHub', 'https://github.com/samitier'),
		]
	)

	getFullAuthorName() {
		return this.aboutAuthor.name + ' ' + this.aboutAuthor.lastName
	}

}
