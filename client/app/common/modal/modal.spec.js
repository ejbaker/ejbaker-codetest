/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import { some } from "lodash";
// ADD ----------------------------------
import ModalModule from "Common/modal";


// PROPERTIES
// =============================================================================
// for the service
let Modal;
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
	Modal.confirm(modalOptions)
		.then(() => {
			// expect resources
			console.log("Done");
			// expect(resources).to.be.an("array");
			// done!
			done();
		})
		.catch(done);
}


// TESTS
// =============================================================================

describe("Modal", () => {
	// before each
	beforeEach(window.module(ModalModule));
	beforeEach(inject((_Modal_) => {
		Modal = _Modal_;
	}));

	// module tests
	describe("Modal", () => {
		// confirm
		describe.skip("confirm()", () => {
			it("should open a modal", confirmNoErrors);
		});
	});
});
