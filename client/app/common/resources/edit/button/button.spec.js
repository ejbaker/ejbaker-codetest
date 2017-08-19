// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import EditButtonModule from "./index";
import EditButtonController from "./button.controller";
import EditButtonComponent from "./button.component";
import EditButtonTemplate from "./button.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = EditButtonComponent;
// added data
const editedResource = {
	id: "some-id",
	name: "A Name",
	type: "website",
	desc: "A helpful site for learning.",
	ref: "http://www.a-web-site.com/",
};


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Tests the controller - has property.
 *
 * @method ctrlHasProp
 */
function ctrlHasProp() {
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
	expect(EditButtonTemplate).to.match(/ui-sref="edit\(\{ id: \$ctrl\.item\.id \}\)"/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(EditButtonTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(EditButtonController);
}


// TESTS
// =============================================================================

describe("EditButton", () => {
	// before
	beforeEach(window.module(EditButtonModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("editButton", null, {
			item: editedResource,
		});
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
	});
	// controller
	describe("Controller", () => {
		it("has an item property", ctrlHasProp);
	});
	// template
	describe("Template", () => {
		it("invokes a template", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
