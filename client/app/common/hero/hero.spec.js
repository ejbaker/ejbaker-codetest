// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import HeroModule from "./hero";
import HeroController from "./hero.controller";
import HeroComponent from "./hero.component";
import HeroTemplate from "./hero.html";

// PROPERTIES
// =============================================================================
let $rootScope;
let makeController;
// component
const component = HeroComponent;


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
 * Tests the template - contains name.
 *
 * @method templateHasName
 */
function templateHasName() {
	expect(HeroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
}

/**
 * Tests the component - contains controller.
 *
 * @method compHasCtrl
 */
function compHasCtrl() {
	expect(component.controller).to.equal(HeroController);
}

/**
 * Tests the component - contains template.
 *
 * @method compHasTemplate
 */
function compHasTemplate() {
	expect(component.template).to.equal(HeroTemplate);
}

// TESTS
// =============================================================================
describe("Hero", () => {
	beforeEach(window.module(HeroModule));
	beforeEach(inject((_$rootScope_) => {
		$rootScope = _$rootScope_;
		makeController = () => new HeroController();
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
		it("has name in template [REMOVE]", templateHasName);
	});
	// component
	describe("Component", () => {
		it("includes the intended template", compHasTemplate);
		it("invokes the right controller", compHasCtrl);
	});
});
