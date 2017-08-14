// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import resourceComponent from "Res/resource/resource.component";
import editResource from "Res/editResource";
import removeResource from "Res/removeResource";

// MODULE
// =============================================================================
const resourceModule = angular.module("resource", [
	uiRouter,
	editResource,
	removeResource,
])
	// add component
	.component("resource", resourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourceModule;
