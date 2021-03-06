// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./resource.html";
import controller from "./resource.controller";
import "./resource.scss";


// COMPONENT
// =============================================================================
const resourceComponent = {
	bindings: {
		item: "<",
		type: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default resourceComponent;
