// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import angularFormly from "angular-formly";
// APP ----------------------------------
import Common from "Common";
import Components from "Comp";
import AppComponent from "./app.component";
import "normalize.css";


// MODULE
// =============================================================================
angular.module("app", [
	uiRouter,
	angularFormly,
	Common,
	Components,
])
	// configure app to work without hashes
	.config(($locationProvider) => {
		"ngInject";

		$locationProvider.html5Mode(true).hashPrefix("!");
	})
	// add component
	.component("app", AppComponent);
