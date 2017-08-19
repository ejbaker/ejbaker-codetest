// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import StoreService from "Common/store";
import homeComponent from "./home.component";


// MODULE
// =============================================================================
const homeModule = angular.module("home", [
	uiRouter,
	StoreService,
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
					items(Store, Errors) {
						"ngInject";

						return Store.list(5)
							.then()
							.catch(err => Errors.catch(err));
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
