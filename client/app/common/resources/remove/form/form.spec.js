// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import RemoveFormModule from "Res/remove/form";
import RemoveFormController from "Res/remove/form/form.controller";
import RemoveFormComponent from "Res/remove/form/form.component";
import RemoveFormTemplate from "Res/remove/form/form.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = RemoveFormComponent;


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
	expect(RemoveFormTemplate).to.match(/\$ctrl\.onSubmit()/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(RemoveFormTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(RemoveFormController);
}


// TESTS
// =============================================================================

describe("RemoveForm", () => {
	// before
	beforeEach(window.module(RemoveFormModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("removeForm", null, { item: { id: "some-id", name: "Some Name" } });
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
