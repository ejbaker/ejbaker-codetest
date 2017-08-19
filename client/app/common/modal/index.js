// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import angular from "angular";
import uibModal from "angular-ui-bootstrap/src/modal";
import AngularUUID from "angular-uuid"; // eslint-disable-line no-unused-vars
// APP ----------------------------------
import ModalService from "./modal.service";
import "./modal.scss";


// MODULE
// =============================================================================
const modalModule = angular.module("modal", [
	// this throws 'argument is not a function'
	// AngularUUID
	// so we have to reference it by string
	// "angular-uuid",
	uibModal,
])
	// service
	.service("Modal", ModalService)
	// name
	.name;


// EXPORT
// =============================================================================
export default modalModule;
