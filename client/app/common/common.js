// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Hero from "./hero/hero";
import Store from "./store/store";


// MODULE
// =============================================================================
const commonModule = angular.module("app.common", [
	Navbar,
	Footer,
	Hero,
	Store,
])
	// name
	.name;


// EXPORT
// =============================================================================
export default commonModule;
