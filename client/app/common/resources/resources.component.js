// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./resources.html";
import controller from "./resources.controller";
import "./resources.scss";


// COMPONENT
// =============================================================================
const resourcesComponent = {
	bindings: {
		items: "<",
		type: "@",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default resourcesComponent;
