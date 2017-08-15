// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Store from "Common/store";
import Modal from "Common/modal";
import removeResourceComponent from "Res/removeResource/removeResource.component";


// MODULE
// =============================================================================
const removeResourceModule = angular.module("removeResource", [
	Store,
	Modal,
])
	// add component
	.component("removeResource", removeResourceComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default removeResourceModule;
