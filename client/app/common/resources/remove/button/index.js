// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Store from "Common/store";
import Modal from "Common/modal";
import removeButtonComponent from "./button.component";


// MODULE
// =============================================================================
const removeButtonModule = angular.module("removeButton", [
	Store,
	Modal,
])
	// add component
	.component("removeButton", removeButtonComponent)
	// name
	.name;


// EXPORT
// =============================================================================
export default removeButtonModule;
