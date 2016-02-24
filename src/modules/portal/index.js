import TopNavDirective from "./directives/top-nav";

import MessageDropdownDirective from "./directives/message-dropdown";
import TaskDropdownDirective from "./directives/task-dropdown";
import NotificationDropdownDirective from "./directives/notification-dropdown";

import SideNavDirective from "./directives/side-nav";
import ControlNavDirective from "./directives/control-nav";

import MessageListDirective from "./directives/message-list";

export default angular.module("modules.portal", [])
	.directive("snTopNav", () => new TopNavDirective())
	.directive("snMessageDropdown", () => new MessageDropdownDirective())
	.directive("snTaskDropdown", () => new TaskDropdownDirective())
	.directive("snNotificationDropdown", () => new NotificationDropdownDirective())
	.directive("snSideNav", () => new SideNavDirective())
	.directive("snControlNav", () => new ControlNavDirective())
	
	.directive("snMessageList", () => new MessageListDirective())
	.name;