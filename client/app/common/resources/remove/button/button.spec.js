// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import ErrorsModule from "Common/errors";
import RemoveButtonModule from "./index";
import RemoveButtonController from "./button.controller";
import RemoveButtonComponent from "./button.component";
import RemoveButtonTemplate from "./button.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = RemoveButtonComponent;


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Tests the controller - has name.
 *
 * @method ctrlHasName
 */
function ctrlHasId() {
	// initialize
	controller.$onInit();
	// check property
	expect(controller).to.have.property("item");
}

/**
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	// tip: use regex to ensure correct bindings are used e.g., {{  }}
	expect(RemoveButtonTemplate).to.match(/\$ctrl\.onSubmit()/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(RemoveButtonTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(RemoveButtonController);
}


// TESTS
// =============================================================================

describe("RemoveButton", () => {
	// before
	beforeEach(window.module(ErrorsModule));
	beforeEach(window.module(RemoveButtonModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("removeButton", null, { item: { id: "some-id", name: "Some Name" } });
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
	});
	// controller
	describe("Controller", () => {
		it("has an ID property", ctrlHasId);
	});
	// template
	describe("Template", () => {
		it("has onSubmit in template", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
