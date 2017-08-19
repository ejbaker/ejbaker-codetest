/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import ErrorsModule from "Common/errors";
import HeaderModule from "Common/header";
import ListModule from "Comp/list";


// PROPERTIES
// =============================================================================

let Store;
let $state;
let $rootScope;
let $location;
let $componentController;
let $compile;
// controller specs
let controller;
// view layer specs.
let scope;
let template;
const items = [
	{
		name: "list test name",
	},
];


// METHODS
// =============================================================================
// BEFORE AND AFTER ----------------------------------

/**
 * Tests the controller - before each.
 *
 * @method ctrlBeforeEach
 */
function ctrlBeforeEach() {
	controller = $componentController("list", {
		$scope: $rootScope.$new(),
	});
}

/**
 * Tests the view - before each.
 *
 * @method viewBeforeEach
 */
function viewBeforeEach() {
	scope = $rootScope.$new();
	template = $compile("<list></list>")(scope);
	scope.$apply();
}


// MAIN ----------------------------------

/**
 * Tests the module - exists.
 *
 * @method moduleExists
 */
function moduleExists(done) {
	// go to url
	$location.url("/list");
	// digest
	$rootScope.$digest();
	// should be home
	expect($state.current.component).to.equal("list");
	// done
	done();
}

/**
 * Tests the controller - has name.
 *
 * @method ctrlHasName
 */
function ctrlHasName() {
	controller.$onInit();
	expect(controller).to.have.property("name");
}

/**
 * Tests the view - has template.
 *
 * @method viewHasTemplate
 */
function viewHasTemplate() {
	expect(template.find("h1").html()).to.equal("list");
}


// TESTS
// =============================================================================

describe("List View", () => {
	// before each
	beforeEach(window.module("ui.router"));
	beforeEach(window.module(ErrorsModule));
	beforeEach(window.module(HeaderModule));
	beforeEach(window.module(ListModule));
	// inject dependencies
	beforeEach(inject(($injector) => {
		Store = $injector.get("Store");
		$rootScope = $injector.get("$rootScope");
		$componentController = $injector.get("$componentController");
		$state = $injector.get("$state");
		$location = $injector.get("$location");
		$compile = $injector.get("$compile");
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., states, injection, naming
		it("component should be list", moduleExists);
	});
	// controller
	describe("Controller", () => {
		// before each
		beforeEach(ctrlBeforeEach);
		// name
		it("has a name property", ctrlHasName);
	});
	// view
	describe("View", () => {
		// before each
		beforeEach(viewBeforeEach);
		// invokes template
		it("has name in template", viewHasTemplate);
	});
});
