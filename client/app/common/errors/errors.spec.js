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
	const errorHandler = Errors.catch("some error");
	console.log(errorHandler);
	expect(errorHandler).to.be.a("promise");
}


// TESTS
// =============================================================================

describe("Errors", () => {
	// before each
	beforeEach(window.module(ErrorsModule));
	beforeEach(inject((_$rootScope_, _Errors_, _Modal_) => {
		$rootScope = _$rootScope_;
		Errors = _Errors_;
		Modal = _Modal_;
	}));

	// module tests
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
		describe.skip("catch()", () => {
			it("should open a modal", errorsNoError);
		});
	});
});
