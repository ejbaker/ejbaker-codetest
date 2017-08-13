// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import footerComponent from "./footer.component";


// MODULE
// =============================================================================
const footerModule = angular.module("footer", [
	uiRouter,
])
	// add component
	.component("footer", footerComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default footerModule;
