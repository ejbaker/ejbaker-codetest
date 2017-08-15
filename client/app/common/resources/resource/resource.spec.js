// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import ResourceModule from "Res/resource";
import ResourceController from "Res/resource/resource.controller";
import ResourceComponent from "Res/resource/resource.component";
import ResourceTemplate from "Res/resource/resource.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let makeController;
const component = ResourceComponent;


// METHODS
// =============================================================================
// MAIN ----------------------------------

/**
 * Tests the controller - has name.
 *
 * @method ctrlHasName
 */
function ctrlHasName() {
	const controller = makeController();
	expect(controller).to.have.property("name");
}

/**
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	// tip: use regex to ensure correct bindings are used e.g., {{  }}
	expect(ResourceTemplate).to.match(/{{\s?\$ctrl\.item\.id\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(ResourceTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(ResourceController);
}


// TESTS
// =============================================================================

describe("Resource", () => {
	// before
	beforeEach(window.module(ResourceModule));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => (new ResourceController());
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
