export default class TopNavController {
	constructor($rootScope, PortalService) {
        this.rootScope = $rootScope;
        this.portalService = PortalService;
	}

	init() {
        this.rootScope.config = this.portalService.config;
	}
    
    toggleSideNav() {
        this.rootScope.config.showSideNav = !this.rootScope.config.showSideNav;
    }
    
    toggleControlNav() {
        this.rootScope.config.showControlNav = !this.rootScope.config.showControlNav;
    }
}

TopNavController.$inject = ["$rootScope", "PortalService"];