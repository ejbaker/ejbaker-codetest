// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Home from "Comp/home";
import About from "Comp/about";
import Add from "Comp/add";
import Edit from "Comp/edit";
import List from "Comp/list";


// COMPONENT
// =============================================================================
const componentModule = angular.module("app.components", [
	Home,
	About,
	Add,
	Edit,
	List,
])
	// name
	.name;


// EXPORT
// =============================================================================
export default componentModule;
