// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import <%= name %>Component from "./<%= name %>.component";


// MODULE
// =============================================================================
const <%= name %>Module = angular.module("<%= name %>", [
	uiRouter,
])

	.component("<%= name %>", <%= name %>Component)

	.name;


// EXPORT
// =============================================================================
export default <%= name %>Module;
