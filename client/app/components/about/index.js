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
	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state("about", {
				url: "/about",
				component: "about",
			});
	})
	// add component
	.component("about", aboutComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default aboutModule;
