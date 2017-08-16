// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import AddButtonModule from "Res/add/button";
import AddButtonController from "Res/add/button/button.controller";
import AddButtonComponent from "Res/add/button/button.component";
import AddButtonTemplate from "Res/add/button/button.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = AddButtonComponent;


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Tests the controller - has name.
 *
 * @method ctrlHasName
 */
function ctrlHasName() {
	// initialize
	controller.$onInit();
	// check property
	expect(controller).to.have.property("name");
}

/**
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	// tip: use regex to ensure correct bindings are used e.g., {{  }}
	expect(AddButtonTemplate).to.match(/\$ctrl\.adding/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(AddButtonTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(AddButtonController);
}


// TESTS
// =============================================================================

describe("AddButton", () => {
	// before
	beforeEach(window.module(AddButtonModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("addButton", null, {});
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
	});
	// controller
	describe("Controller", () => {
		it("has a name property", ctrlHasName);
	});
	// template
	describe("Template", () => {
		it("invokes a template that contains adding flag", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
