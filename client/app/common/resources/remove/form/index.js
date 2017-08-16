// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Store from "Common/store";
import Modal from "Common/modal";
import removeFormComponent from "Res/remove/form/form.component";


// MODULE
// =============================================================================
const removeFormModule = angular.module("removeForm", [
	Store,
	Modal,
])
	// add component
	.component("removeForm", removeFormComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default removeFormModule;
