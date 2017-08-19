// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import formly from "angular-formly";
import formlyBootstrap from "angular-formly-templates-bootstrap";
// APP ----------------------------------
import Store from "Common/store";
import Errors from "Common/errors";
import addFormComponent from "Res/add/form/form.component";


// MODULE
// =============================================================================
const addFormModule = angular.module("addForm", [
	uiRouter,
	formly,
	formlyBootstrap,
	Store,
	Errors,
])
	// add component
	.component("addForm", addFormComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default addFormModule;
