// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import formly from "angular-formly";
import formlyBootstrap from "angular-formly-templates-bootstrap";
// APP ----------------------------------
import Store from "Common/store";
import editResourceComponent from "Res/editResource/editResource.component";


// MODULE
// =============================================================================
const editResourceModule = angular.module("editResource", [
	uiRouter,
	formly,
	formlyBootstrap,
	Store,
])
	// add component
	.component("editResource", editResourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default editResourceModule;
