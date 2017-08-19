// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import NavbarModule from "Common/navbar";


// PROPERTIES
// =============================================================================
let $rootScope;
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
 * @method ctrlHasName
 */
function ctrlBeforeEach() {
	controller = $componentController("navbar", {
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
	template = $compile("<navbar></navbar>")(scope);
	scope.$apply();
}


// MAIN ----------------------------------

/**
 * Tests the controller - has name.
 *
 * @method ctrlHasName
 */
function ctrlHasName() {
	expect(controller).to.have.property("name");
}

/**
 * Tests the view - has template.
 *
 * @method viewHasTemplate
 */
function viewHasTemplate() {
	expect(template.find("div").find("a").html()).to.equal("Your Favorite Resources");
}


// TESTS
// =============================================================================
describe("Navbar", () => {
	// before each
	beforeEach(window.module(NavbarModule));
	// inject dependencies
	beforeEach(inject(($injector) => {
		$rootScope = $injector.get("$rootScope");
		$componentController = $injector.get("$componentController");
		$compile = $injector.get("$compile");
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
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
		// template works
		it("has name in template", viewHasTemplate);
	});
});
