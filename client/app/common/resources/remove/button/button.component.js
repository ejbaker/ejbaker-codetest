// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./button.html";
import controller from "./button.controller";


// COMPONENT
// =============================================================================
const removeButtonComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default removeButtonComponent;
