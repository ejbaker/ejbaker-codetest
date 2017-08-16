// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import resourcesComponent from "Res/list/resources.component";
import resource from "Res/resource";


// MODULE
// =============================================================================
const resourcesModule = angular.module("resources", [
	resource,
])
	// add component
	.component("resources", resourcesComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourcesModule;
