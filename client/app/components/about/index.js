// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import aboutComponent from "./about.component";


// MODULE
// =============================================================================
const aboutModule = angular.module("about", [
	uiRouter,
])
	// config
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("about", {
				url: "/about",
				component: "about",
			});
	})
	// about component
	.component("about", aboutComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default aboutModule;
