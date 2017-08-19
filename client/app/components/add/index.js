// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import addForm from "Res/add/form";
import addComponent from "./add.component";


// MODULE
// =============================================================================
const addModule = angular.module("add", [
	uiRouter,
	addForm,
])
	// config
	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state("add", {
				url: "/add",
				component: "add",
			});
	})
	// add component
	.component("add", addComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default addModule;
