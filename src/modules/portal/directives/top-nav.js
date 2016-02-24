import template from "../templates/top-nav.html";

import TopNavController from "../controllers/top-nav";

export default class TopNavDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
        this.controller = TopNavController;
        this.controllerAs = "navCtrl";
	}
}