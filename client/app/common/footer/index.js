// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import footerComponent from "./footer.component";


// MODULE
// =============================================================================
const footerModule = angular.module("footer", [])
	// add component
	.component("footer", footerComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default footerModule;
