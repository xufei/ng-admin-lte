import template from "../templates/notification-dropdown.html";

import NotificationListController from "../controllers/notification-list";

export default class NotificationDropdownDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";
		this.replace = true;
		this.controller = NotificationListController;
		this.controllerAs = "listCtrl";
        this.scope = {};
	}
}