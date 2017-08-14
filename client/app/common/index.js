// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Navbar from "Common/navbar";
import Footer from "Common/footer";
import Resources from "Common/resources";
import Hero from "Common/hero";
import Modal from "Common/modal";
import Store from "Common/store";


// MODULE
// =============================================================================
const commonModule = angular.module("app.common", [
	Navbar,
	Footer,
	Hero,
	Resources,
	Modal,
	Store,
])
	// name
	.name;


// EXPORT
// =============================================================================
export default commonModule;
