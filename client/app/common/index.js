// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Header from "Common/header";
import Navbar from "Common/navbar";
import Resources from "Common/resources/list";
import Modal from "Common/modal";
import Store from "Common/store";
import Errors from "Common/errors";


// MODULE
// =============================================================================
const commonModule = angular.module("app.common", [
	Header,
	Navbar,
	Resources,
	Modal,
	Store,
	Errors,
])
	// name
	.name;


// EXPORT
// =============================================================================
export default commonModule;
