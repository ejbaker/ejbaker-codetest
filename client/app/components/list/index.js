// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import StoreModule from "Common/store";
import listComponent from "./list.component";


// MODULE
// =============================================================================
const listModule = angular.module("list", [
	uiRouter,
	StoreModule,
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
					items(Store) {
						return Store.list()
							.then((resources) => {
								console.log("Success!", resources);
								return resources;
							})
							.catch((err) => {
								console.log(err);
								return err;
							});
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
