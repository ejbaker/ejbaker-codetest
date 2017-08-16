// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import navbarComponent from "./navbar.component";
import addButton from "Res/add/button";


// MODULE
// =============================================================================
const navbarModule = angular.module("navbar", [
	uiRouter,
	addButton,
])
	// add component
	.component("navbar", navbarComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default navbarModule;
