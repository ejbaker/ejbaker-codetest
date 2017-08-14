// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import heroComponent from "./hero.component";


// MODULE
// =============================================================================
const heroModule = angular.module("hero", [
	uiRouter,
])
	// add component
	.component("hero", heroComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default heroModule;
