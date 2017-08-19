// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import resourceComponent from "./resource.component";
import editButton from "Res/edit/button";
import removeButton from "Res/remove/button";

// MODULE
// =============================================================================
const resourceModule = angular.module("resource", [
	editButton,
	removeButton,
])
	// add component
	.component("resource", resourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default resourceModule;
