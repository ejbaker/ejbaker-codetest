// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import uibCollapse from "angular-ui-bootstrap/src/collapse";
// APP ----------------------------------
import AddButton from "Res/add/button";
import navbarComponent from "./navbar.component";


// MODULE
// =============================================================================
const navbarModule = angular.module("navbar", [
	uiRouter,
	uibCollapse,
	AddButton,
])
	// add component
	.component("navbar", navbarComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default navbarModule;
