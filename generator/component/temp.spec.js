// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import <%= upCaseName %>Module from "./<%= name %>";
import <%= upCaseName %>Controller from "./<%= name %>.controller";
import <%= upCaseName %>Component from "./<%= name %>.component";
import <%= upCaseName %>Template from "./<%= name %>.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let makeController;
const component = <%= upCaseName %>Component;


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
	expect(<%= upCaseName %>Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(<%= upCaseName %>Template);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(<%= upCaseName %>Controller);
}


// TESTS
// =============================================================================

describe("<%= upCaseName %>", () => {
	// before
	beforeEach(window.module(<%= upCaseName %>Module));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => (new <%= upCaseName %>Controller());
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
