// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import ngSanitize from "angular-sanitize";
// APP ----------------------------------
import Resource from "Res/resource";
import resourcesComponent from "./resources.component";


// MODULE
// =============================================================================
const resourcesModule = angular.module("resources", [
	ngSanitize,
	Resource,
])
	// add component
	.component("resources", resourcesComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourcesModule;
