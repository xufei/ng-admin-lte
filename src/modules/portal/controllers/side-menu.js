export default class SideMenuController {
	constructor(PortalService, $state) {
		this.menuList = [];
		this.menuTree = [];
		this.menuMap = {};

		this.PortalService = PortalService;
        this.$state = $state;
	}

	init() {
		this.PortalService.getMenuList().then(menus => {
			menus.forEach(menuItem => {
				this.menuMap[menuItem.code] = menuItem;

				if (!menuItem.parent) {
					this.menuTree.push(menuItem);
				}
				else {
					let parent = this.menuMap[menuItem.parent];
					if (!parent.children) {
						parent.children = [];
					}
					parent.children.push(menuItem);
					menuItem.parent = parent;
				}
			});
			
			this.menuList = menus;
		});
	}
	
	menuClick(menu, evt) {
		this.menuList.forEach(item => {
			if (item == menu) {
				menu.$expanded = !menu.$expanded;
			}
			else {
				if (item != menu.parent) {
					delete item.$expanded;
				}
			}
		});
		
		evt.stopPropagation();
	}
    
    selectMenu(menu) {
		if (this.isParentSelected(menu)) {
			menu.$expanded = !menu.$expanded;
		}
		else {
			if (this.selectedMenu) {
				delete this.selectedMenu.$expanded;
			}

			this.selectedMenu = menu;
			this.selectedMenu.$expanded = true;
		}

		if (menu.state) {
			this.$state.go(menu.state);
		}
	}

	isParentSelected(menuItem) {
		if (this.selectedMenu) {
			return menuItem.code.indexOf(this.selectedMenu.code) == 0;
		}
		else {
			return false;
		}
	}

	isMenuSelected (menuItem) {
		if (this.selectedMenu) {
			if (this.selectedMenu.code.indexOf(menuItem.code) == 0) {
				return true;
			}
		}
		else {
			return false;
		}
	}

	 locateMenu(state) {
		this.menuList.forEach(it => {
			delete it.$expanded;
			if (it.state == state.name) {
				this.selectedMenu = it;
			}
		});

		if (this.selectedMenu) {
			var pointer = this.selectedMenu;
			while (pointer) {
				pointer.$expanded = true;
				pointer = pointer.parentMenu;
			}
		}
	}
}

SideMenuController.$inject = ["PortalService", "$state"];