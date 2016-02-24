import template from "../templates/top-nav.html";

export default class TopNavDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
	}
}