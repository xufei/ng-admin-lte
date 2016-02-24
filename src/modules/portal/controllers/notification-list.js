export default class NotificationListController {
	constructor(PortalService) {
		this.notificationList = [];

		this.PortalService = PortalService;

		this.notificationClasses = ["message", "twitter", "envelope", "tasks", "upload"];
	}

	init() {
		this.PortalService.getAlertList().then(result => this.notificationList = result);
	}

	alertClass(type) {
		return "fa-" + type;
	}
}

NotificationListController.$inject = ["PortalService"];