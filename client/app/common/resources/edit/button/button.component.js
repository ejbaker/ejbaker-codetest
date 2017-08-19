// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./button.html";
import controller from "./button.controller";


// COMPONENT
// =============================================================================
const editButtonComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default editButtonComponent;
