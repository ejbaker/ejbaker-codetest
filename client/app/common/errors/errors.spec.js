/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import ErrorsModule from "Common/errors";


// PROPERTIES
// =============================================================================
// for the service
let Errors;
let Modal;
let $rootScope;
// added data
const errorMessage = "Some error or other";


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Test the catch method - no errors.
 *
 * @method errorsNoError
 * @param {function} done
 */
function errorsNoError() {
	// catch an "error"
	Errors.catch(errorMessage);
	// promise resolved
	$rootScope.$digest();
	// expect uibModal to be called
	expect(Modal.error).to.have.been.called;
}


// TESTS
// =============================================================================

describe("Errors", () => {
	// before each
	beforeEach(window.module(ErrorsModule));
	beforeEach(inject(($injector) => {
		$rootScope = $injector.get("$rootScope");
		Errors = $injector.get("Errors");
		Modal = $injector.get("Modal");
	}));

	// module tests
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
		describe("catch()", () => {
			it("should open a modal", errorsNoError);
		});
	});
});
