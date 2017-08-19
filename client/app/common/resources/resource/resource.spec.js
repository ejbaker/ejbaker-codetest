// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import ResourceModule from "./index";
import ResourceController from "./resource.controller";
import ResourceComponent from "./resource.component";
import ResourceTemplate from "./resource.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = ResourceComponent;
// data
const resource = {
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
	expect(ResourceTemplate).to.match(/\$ctrl\.recent/g);
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
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("resource", null, {
			item: resource,
			type: "recent",
		});
	}));
	// module
	describe("Module", () => {
		// top-level specs: i.e., routes, injection, naming
	});
	// controller
	describe("Controller", () => {
		it("has an item property", ctrlHasName);
	});
	// template
	describe("Template", () => {
		it("has recent flag in template", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
