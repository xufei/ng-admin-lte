import template from "../templates/control-nav.html";

import ControlNavController from "../controllers/control-nav";

export default class ControlNavDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = ControlNavController;
		this.controllerAs = "controlNavCtrl";
	}
}