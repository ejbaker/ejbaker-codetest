// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import editButtonComponent from "./button.component";


// MODULE
// =============================================================================
const editButtonModule = angular.module("editButton", [])
	// add component
	.component("editButton", editButtonComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default editButtonModule;
