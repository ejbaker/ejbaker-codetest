// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import ngSanitize from "angular-sanitize";
// APP ----------------------------------
import ResourcesModule from "./index";
import ResourcesController from "./resources.controller";
import ResourcesComponent from "./resources.component";
import ResourcesTemplate from "./resources.html";


// PROPERTIES
// =============================================================================
let controller;
const component = ResourcesComponent;


// METHODS
// =============================================================================
// MAIN ----------------------------------

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
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	// tip: use regex to ensure correct bindings are used e.g., {{  }}
	expect(ResourcesTemplate).to.match(/item in \$ctrl\.items/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(ResourcesTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(ResourcesController);
}


// TESTS
// =============================================================================

describe("Resources", () => {
	// before
	beforeEach(window.module(ngSanitize));
	beforeEach(window.module(ResourcesModule));
	beforeEach(inject((_$componentController_) => {
		controller = _$componentController_("resources", null, {
			items: [],
			type: "recent",
		});
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
		it("has items in template", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
