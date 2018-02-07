import SocialLink from './social-link.model'

export default class AboutAuthor {

	constructor(
		public name: string = '',
		public lastName: string = '',
		public bio: string = '',
		public socialLinks: SocialLink[] = [],
	) {}
}
