// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import AddResourceModule from "Res/addResource";
import AddResourceController from "Res/addResource/addResource.controller";
import AddResourceComponent from "Res/addResource/addResource.component";
import AddResourceTemplate from "Res/addResource/addResource.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = AddResourceComponent;


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
	expect(AddResourceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(AddResourceTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(AddResourceController);
}


// TESTS
// =============================================================================

describe("AddResource", () => {
	// before
	beforeEach(window.module(AddResourceModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("addResource", null, {});
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
	});
	// controller
	describe("Controller", () => {
		it("has a name property [REMOVE]", ctrlHasName);
	});
	// template
	describe("Template", () => {
		it("has name in template [REMOVE]", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
