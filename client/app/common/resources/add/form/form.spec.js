// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import AddFormModule from "Res/add/form";
import AddFormController from "Res/add/form/form.controller";
import AddFormComponent from "Res/add/form/form.component";
import AddFormTemplate from "Res/add/form/form.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = AddFormComponent;


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
	expect(AddFormTemplate).to.match(/\$ctrl\.onSubmit()/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(AddFormTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(AddFormController);
}


// TESTS
// =============================================================================

describe("AddForm", () => {
	// before
	beforeEach(window.module(AddFormModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("addForm", null, {});
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
		it("invokes a template that contains onSubmit method", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
