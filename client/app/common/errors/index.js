// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Errors from "./errors.service";
import Modal from "Common/modal";


// MODULE
// =============================================================================
const errorsModule = angular.module("errors", [
	Modal,
])
	// service
	.service("Errors", Errors)
	// name
	.name;


// EXPORT
// =============================================================================
export default errorsModule;
