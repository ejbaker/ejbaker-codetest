// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import EditButton from "Res/edit/button";
import RemoveButton from "Res/remove/button";
import resourceComponent from "./resource.component";

// MODULE
// =============================================================================
const resourceModule = angular.module("resource", [
	EditButton,
	RemoveButton,
])
	// add component
	.component("resource", resourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourceModule;
