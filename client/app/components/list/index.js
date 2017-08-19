// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
import dirPagination from "angular-utils-pagination";
// APP ----------------------------------
import StoreService from "Common/store";
import listComponent from "./list.component";


// MODULE
// =============================================================================
const listModule = angular.module("list", [
	uiRouter,
	dirPagination,
	StoreService,
])
	// config
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("list", {
				url: "/list",
				component: "list",
				// load up store on landing page
				resolve: {
					items(Store, Errors) {
						return Store.list()
							.then()
							.catch(err => Errors.catch(err));
					},
				},
			});
	})
	// add component
	.component("list", listComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default listModule;
