// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import StoreService from "Common/store";
import editForm from "Res/edit/form";
import editComponent from "./edit.component";


// MODULE
// =============================================================================
const editModule = angular.module("edit", [
	uiRouter,
	StoreService,
	editForm,
])
	// config
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("edit", {
				url: "/edit/:id",
				component: "edit",
				resolve: {
					item($stateParams, Store, Errors) {
						"ngInject";

						return Store.get($stateParams.id)
							.then()
							.catch(err => Errors.catch(err));
					},
				},
			});
	})
	// edit component
	.component("edit", editComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default editModule;
