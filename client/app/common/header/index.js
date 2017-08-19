// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import headerComponent from "./header.component";


// MODULE
// =============================================================================
const headerModule = angular.module("header", [
	uiRouter,
])
	// add component
	.component("header", headerComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default headerModule;
