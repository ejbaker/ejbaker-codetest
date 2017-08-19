/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import { some } from "lodash";
// ADD ----------------------------------
import StoreModule from "./index";


// PROPERTIES
// =============================================================================
// for the service
let Store;
// added data
const addedResource = {
	name: "CodeSchool",
	type: "website",
	desc: "A helpful site for self-directed learning.",
	ref: "http://www.codeschool.com/",
};


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Test the list method - no errors.
 *
 * @method listNoErrors
 * @param {function} done
 */
function listNoErrors(done) {
	// get the list
	Store.list()
		.then((resources) => {
			// expect resources
			expect(resources).to.be.an("array");
			// done!
			done();
		})
		.catch(done);
}

/**
 * Test the add method - no errors.
 *
 * @method addNoErrors
 * @param {function} done
 */
function addNoErrors(done) {
	// add a resource
	Store.add(addedResource)
		.then((resources) => {
			// expect added resource
			expect(some(resources, addedResource)).to.be.true;
			// done!
			done();
		})
		.catch(done);
}

/**
 * Test the add method - error on repeated data.
 *
 * @method addRepeatError
 * @param {function} done
 */
function addRepeatError(done) {
	// add a resource
	Store.add(addedResource)
		.then(done)
		.catch((err) => {
			// expect error
			expect(err).to.equal("Resource exists!");
			// done!
			done();
		});
}

/**
 * Test the edit method - no errors.
 *
 * @method editNoErrors
 * @param {function} done
 */
function editNoErrors(done) {
	// define variables
	let resource;
	// get the list
	Store.list()
		.then((resources) => {
			// change description
			resource = resources[0];
			resource.description = "New description.";
			// edit
			return Store.edit(resource);
		})
		.then((editdResources) => {
			// expect editd resource
			expect(some(editdResources, resource)).to.be.true;
			// done!
			done();
		})
		.catch(done);
}

/**
 * Test the edit method - error on nonexistent.
 *
 * @method editNonexistentError
 * @param {function} done
 */
function editNonexistentError(done) {
	// attempt the edit with a bad ID
	Store.edit("bad-id")
		.then(done)
		.catch((err) => {
			// should error
			expect(err).to.equal("No resource with that ID!");
			// done!
			done();
		});
}

/**
 * Test the remove method - no errors.
 *
 * @method removeNoErrors
 * @param {function} done
 */
function removeNoErrors(done) {
	// define variables
	let resource;
	// get the list
	Store.list()
		.then((resources) => {
			// change description
			resource = resources[0];
			// edit
			return Store.remove(resource.id);
		})
		.then((editdResources) => {
			// resource should not exist
			expect(some(editdResources, resource)).to.be.false;
			// done!
			done();
		})
		.catch(done);
}

/**
 * Test the remove method - error on nonexistent.
 *
 * @method removeNonexistentError
 * @param {function} done
 */
function removeNonexistentError(done) {
	// attempt the edit with a bad ID
	Store.remove("bad-id")
		.then(done)
		.catch((err) => {
			// should error
			expect(err).to.equal("No resource with that ID!");
			// done!
			done();
		});
}


// TESTS
// =============================================================================

describe("Store", () => {
	// before each
	beforeEach(window.module(StoreModule));
	beforeEach(inject((_Store_) => {
		Store = _Store_;
	}));

	// module tests
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
		describe("list()", () => {
			it("should return an array", listNoErrors);
		});
		// add
		describe("add()", () => {
			it("should add and return data", addNoErrors);
			context("when adding duplicate data", () => {
				it("should return an error", addRepeatError);
			});
		});
		// edit
		describe("edit()", () => {
			it("should add and return data", editNoErrors);
			context("when updating nonexistent data", () => {
				it("should return an error", editNonexistentError);
			});
		});
		// remove
		describe("remove()", () => {
			it("should remove and return data", removeNoErrors);
			context("when removing nonexistent data", () => {
				it("should return an error", removeNonexistentError);
			});
		});
	});
});
