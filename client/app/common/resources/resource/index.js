// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import resourceComponent from "Res/resource/resource.component";
import editButton from "Res/edit/button";
import remove from "Res/remove/form";

// MODULE
// =============================================================================
const resourceModule = angular.module("resource", [
	editButton,
	remove,
])
	// add component
	.component("resource", resourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourceModule;
