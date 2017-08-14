// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import modal from "angular-ui-bootstrap/src/modal";
// APP ----------------------------------
import modalFactory from "Common/modal/modal.factory";


// MODULE
// =============================================================================
const modalModule = angular.module("modal", [
	modal,
])
	// add factory
	.factory("modal", modalFactory)
	// name
	.name;


// EXPORT
// =============================================================================
export default modalModule;
