// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
import uiRouter from "angular-ui-router";
// APP ----------------------------------
import ErrorsModule from "Common/errors";
import EditFormModule from "./index";
import EditFormController from "./form.controller";
import EditFormComponent from "./form.component";
import EditFormTemplate from "./form.html";


// PROPERTIES
// =============================================================================
let $componentController;
let controller;
const component = EditFormComponent;
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
	expect(EditFormTemplate).to.match(/\$ctrl\.onSubmit/g);
}

/**
 * Tests the component - has template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(EditFormTemplate);
}

/**
 * Tests the component - has controller.
 *
 * @method compHasController
 */
function compHasController() {
	expect(component.controller).to.equal(EditFormController);
}


// TESTS
// =============================================================================

describe("EditForm", () => {
	// before
	beforeEach(window.module(uiRouter));
	beforeEach(window.module(ErrorsModule));
	beforeEach(window.module(EditFormModule));
	beforeEach(inject(($injector) => {
		$componentController = $injector.get("$componentController");
		controller = $componentController("editForm", null, {
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
		it("invokes a template that contains editing flag", ctrlHasTemplate);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasController);
	});
});
