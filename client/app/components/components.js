// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Home from "./home/home";
import About from "./about/about";


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
