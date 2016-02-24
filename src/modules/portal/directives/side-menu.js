import template from "../templates/side-menu.html";

import SideMenuController from "../controllers/side-menu";

export default class SideMenuDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.controller = SideMenuController;
		this.controllerAs = "menuCtrl";
	}
}