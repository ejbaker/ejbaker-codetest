// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import HomeModule from "./home";


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
	controller = $componentController("home", {
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
	template = $compile("<home></home>")(scope);
	scope.$apply();
}


// MAIN ----------------------------------

/**
 * Tests the module - exists.
 *
 * @method moduleExists
 */
function moduleExists() {
	$location.url("/");
	$rootScope.$digest();
	expect($state.current.component).to.eq("home");
}

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
	expect(template.find("h1").html()).to.eq("Found in home.html");
}


// TESTS
// =============================================================================

describe("Home", () => {
	// before each
	beforeEach(window.module(HomeModule));
	// inject dependencies
	beforeEach(inject(($injector) => {
		$rootScope = $injector.get("$rootScope");
		$componentController = $injector.get("$componentController");
		$state = $injector.get("$state");
		$location = $injector.get("$location");
		$compile = $injector.get("$compile");
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
		it("default component should be home", moduleExists);
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
