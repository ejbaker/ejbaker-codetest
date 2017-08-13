// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import FooterModule from "./footer";
import FooterController from "./footer.controller";
import FooterComponent from "./footer.component";
import FooterTemplate from "./footer.html";

// PROPERTIES
// =============================================================================
let $rootScope;
let makeController;
// component/directive specs
const component = FooterComponent;


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
	expect(FooterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(FooterTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(FooterController);
}


// TESTS
// =============================================================================

describe("Footer", () => {
	// before
	beforeEach(window.module(FooterModule));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => (new FooterController());
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
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
