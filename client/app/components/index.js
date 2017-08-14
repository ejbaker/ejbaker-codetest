// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Home from "Comp/home";
import About from "Comp/about";


// COMPONENT
// =============================================================================
const componentModule = angular.module("app.components", [
	Home,
	About,
])
	// name
	.name;


// EXPORT
// =============================================================================
export default componentModule;
