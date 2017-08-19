// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import addButtonComponent from "./button.component";


// MODULE
// =============================================================================
const addButtonModule = angular.module("addButton", [])
	// add component
	.component("addButton", addButtonComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default addButtonModule;
