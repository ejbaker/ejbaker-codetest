// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import EditResourceModule from "Res/editResource";
import EditResourceController from "Res/editResource/editResource.controller";
import EditResourceComponent from "Res/editResource/editResource.component";
import EditResourceTemplate from "Res/editResource/editResource.html";


// PROPERTIES
// =============================================================================
let $rootScope;
let controller;
const component = EditResourceComponent;
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
	expect(EditResourceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(EditResourceTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(EditResourceController);
}


// TESTS
// =============================================================================

describe("EditResource", () => {
	// before
	beforeEach(window.module(EditResourceModule));
	beforeEach(inject((_$rootScope_, _$componentController_) => {
		$rootScope = _$rootScope_;
		controller = _$componentController_("editResource", null, {
			item: editedResource,
		});
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
