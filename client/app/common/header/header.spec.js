// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import HeaderModule from "./index";
import HeaderController from "./header.controller";
import HeaderComponent from "./header.component";
import HeaderTemplate from "./header.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let makeController;
const component = HeaderComponent;


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
	controller.$onInit();
	expect(controller).to.have.property("name");
}

/**
 * Tests the controller - has template.
 *
 * @method ctrlHasTemplate
 */
function ctrlHasTemplate() {
	expect(HeaderTemplate).to.match(/{{\s?\$ctrl\.title\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(HeaderTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(HeaderController);
}


// TESTS
// =============================================================================

describe("Header", () => {
	// before
	beforeEach(window.module(HeaderModule));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => (new HeaderController());
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
		it("has name in template", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
