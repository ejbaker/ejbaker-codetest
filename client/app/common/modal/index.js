// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uibModal from "angular-ui-bootstrap/src/modal";
// APP ----------------------------------
import modalService from "./modal.service";
import "./modal.scss";


// MODULE
// =============================================================================
const modalModule = angular.module("modal", [
	uibModal,
])
	// service
	.service("Modal", modalService)
	// name
	.name;


// EXPORT
// =============================================================================
export default modalModule;
