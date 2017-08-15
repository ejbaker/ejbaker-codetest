// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import StoreModule from "Common/store";
import homeComponent from "./home.component";


// MODULE
// =============================================================================
const homeModule = angular.module("home", [
	uiRouter,
	StoreModule,
])
	// config
	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				component: "home",
				// load up store on landing page
				resolve: {
					items(Store) {
						console.log("Getting most recent resources...");
						return Store.list(true)
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
	.component("home", homeComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default homeModule;
