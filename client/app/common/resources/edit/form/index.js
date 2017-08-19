// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import formly from "angular-formly";
import formlyBootstrap from "angular-formly-templates-bootstrap";
// APP ----------------------------------
import Store from "Common/store";
import editFormComponent from "./form.component";


// MODULE
// =============================================================================
const editFormModule = angular.module("editForm", [
	formly,
	formlyBootstrap,
	Store,
])
	// add component
	.component("editForm", editFormComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default editFormModule;
