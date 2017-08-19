// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
// APP ----------------------------------
import Modal from "Common/modal";
import errorsService from "./errors.service";


// MODULE
// =============================================================================
const errorsModule = angular.module("errors", [
	Modal,
])
	// service
	.service("Errors", errorsService)
	// name
	.name;


// EXPORT
// =============================================================================
export default errorsModule;
