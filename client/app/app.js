// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import angularFormly from "angular-formly";
// APP ----------------------------------
import Common from "Common";
import Components from "Comp";
import appComponent from "./app.component";
import "normalize.css";


// MODULE
// =============================================================================
angular.module("app", [
	uiRouter,
	angularFormly,
	Common,
	Components,
])
	// add component
	.component("app", appComponent);
