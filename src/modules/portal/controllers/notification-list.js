export default class NotificationListController {
	constructor(PortalService) {
		this.notificationList = [];

		this.PortalService = PortalService;

		this.notificationClasses = ["message", "twitter", "envelope", "tasks", "upload"];
	}

	init() {
		this.PortalService.getNotificationList().subscribe(notification => this.notificationList.push(notification));
	}

	alertClass(type) {
		return "fa-" + type;
	}
}

NotificationListController.$inject = ["PortalService"];