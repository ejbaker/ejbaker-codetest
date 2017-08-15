// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import RemoveResourceModule from "Res/removeResource";
import RemoveResourceController from "Res/removeResource/removeResource.controller";
import RemoveResourceComponent from "Res/removeResource/removeResource.component";
import RemoveResourceTemplate from "Res/removeResource/removeResource.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = RemoveResourceComponent;


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
	expect(controller).to.have.property("id");
}

/**
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	// tip: use regex to ensure correct bindings are used e.g., {{  }}
	expect(RemoveResourceTemplate).to.match(/\$ctrl\.onSubmit()/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(RemoveResourceTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(RemoveResourceController);
}


// TESTS
// =============================================================================

describe("RemoveResource", () => {
	// before
	beforeEach(window.module(RemoveResourceModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("removeResource", null, { id: "some-id" });
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
