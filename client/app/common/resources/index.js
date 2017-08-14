// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import resourcesComponent from "Res/resources.component";
import resource from "Res/resource";
import addResource from "Res/addResource";


// MODULE
// =============================================================================
const resourcesModule = angular.module("resources", [
	uiRouter,
	resource,
	addResource,
])
	// add component
	.component("resources", resourcesComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourcesModule;
