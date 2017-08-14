// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import formly from "angular-formly";
import formlyBootstrap from "angular-formly-templates-bootstrap";
// APP ----------------------------------
import Store from "Common/store";
import addResourceComponent from "Res/addResource/addResource.component";


// MODULE
// =============================================================================
const addResourceModule = angular.module("addResource", [
	uiRouter,
	formly,
	formlyBootstrap,
	Store,
])
	// add component
	.component("addResource", addResourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default addResourceModule;
