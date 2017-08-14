// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import navbarComponent from "./navbar.component";


// MODULE
// =============================================================================
const navbarModule = angular.module("navbar", [
	uiRouter,
])
	// add component
	.component("navbar", navbarComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default navbarModule;
