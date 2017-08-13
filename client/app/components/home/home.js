// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import homeComponent from "./home.component";


// MODULE
// =============================================================================
const homeModule = angular.module("home", [
	uiRouter,
])
	// config
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				component: "home",
			});
	})
	// add component
	.component("home", homeComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default homeModule;
