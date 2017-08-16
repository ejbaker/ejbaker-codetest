// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import formly from "angular-formly";
import formlyBootstrap from "angular-formly-templates-bootstrap";
// APP ----------------------------------
import Store from "Common/store";
import addFormComponent from "Res/add/form/form.component";


// MODULE
// =============================================================================
const addFormModule = angular.module("addForm", [
	formly,
	formlyBootstrap,
	Store,
])
	// add component
	.component("addForm", addFormComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default addFormModule;
