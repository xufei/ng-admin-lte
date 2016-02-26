export default class TaskListController {
	constructor(PortalService) {
		this.taskList = [];

		this.PortalService = PortalService;

		this.taskClasses = ["primary", "success", "warning", "danger"];
	}

	init() {
		this.PortalService.getTaskList().subscribe(task => this.taskList.push(task));
	}

	taskClass(index) {
		return "progress-bar-" + this.taskClasses[index % this.taskClasses.length];
	}
}

TaskListController.$inject = ["PortalService"];