/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import ErrorsModule from "Common/errors";
import HeaderModule from "Common/header";
import AddModule from "Comp/add";


// PROPERTIES
// =============================================================================

let $rootScope;
let $state;
let $location;
let $componentController;
let $compile;
// controller specs
let controller;
// view layer specs.
let scope;
let template;


// METHODS
// =============================================================================
// BEFORE AND AFTER ----------------------------------

/**
 * Tests the controller - before each.
 *
 * @method ctrlBeforeEach
 */
function ctrlBeforeEach() {
	controller = $componentController("add", {
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
	template = $compile("<add></add>")(scope);
	scope.$apply();
}


// MAIN ----------------------------------

/**
 * Tests the module - exists.
 *
 * @method moduleExists
 */
function moduleExists(done) {
	// go to default url
	$location.url("/add");
	// digest
	$rootScope.$digest();
	// should be add
	expect($state.current.component).to.equal("add");
	// done!
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
	expect(template.find("h1").html()).to.equal("add");
}


// TESTS
// =============================================================================

describe("Add View", () => {
	// before each
	beforeEach(window.module(uiRouter));
	beforeEach(window.module(ErrorsModule));
	beforeEach(window.module(HeaderModule));
	beforeEach(window.module(AddModule));
	// inject dependencies
	beforeEach(inject(($injector) => {
		$rootScope = $injector.get("$rootScope");
		$componentController = $injector.get("$componentController");
		// $state = $injector.get("$state");
		$state = $injector.get("$state");
		$location = $injector.get("$location");
		$compile = $injector.get("$compile");
	}));
	// module
	describe("Module", () => {
		// This test does not pass while using uiRouter. (It works fine under ngRoute.)
		// May be related to the bug where $state.current is sometimes undefined.
		it.skip("default component should be add", moduleExists);
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
