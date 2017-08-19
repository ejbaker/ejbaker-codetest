/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import uibModal from "angular-ui-bootstrap/src/modal";
// ADD ----------------------------------
import ModalModule from "Common/modal";


// PROPERTIES
// =============================================================================
// for the service
let Modal;
let $uibModal;
let $rootScope;
// added data
const modalOptions = {
	actionButtonText: "Delete",
	bodyText: "Really delete item?",
};


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Test the confirm method - no errors.
 *
 * @method confirmNoErrors
 * @param {function} done
 */
function confirmNoErrors(done) {
	// get the confirm
	Modal.confirm(modalOptions);
	// promise resolved
	$rootScope.$digest();
	// expect uibModal to be called
	expect($uibModal.open).to.have.been.called;
	// done!
	done();
}

/**
 * Test the error method - no errors.
 *
 * @method errNoErrors
 * @param {function} done 
 */
function errNoErrors(done) {
	// get the confirm
	Modal.error(modalOptions);
	// promise resolved
	$rootScope.$digest();
	// expect uibModal to be called
	expect($uibModal.open).to.have.been.called;
	// done!
	done();
}


// TESTS
// =============================================================================

describe("Modal", () => {
	// before each
	beforeEach(window.module(uibModal));
	beforeEach(window.module(ModalModule));
	beforeEach(inject(($injector) => {
		$rootScope = $injector.get("$rootScope");
		$uibModal = $injector.get("$uibModal");
		Modal = $injector.get("Modal");
	}));

	// module tests
	describe("Modal", () => {
		// confirm
		describe("confirm()", () => {
			it("should open a modal", confirmNoErrors);
		});
		// error
		describe("error()", () => {
			it("should open a modal", errNoErrors);
		});
	});
});
