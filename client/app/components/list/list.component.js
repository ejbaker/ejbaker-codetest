// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./list.html";
import controller from "./list.controller";


// COMPONENT
// =============================================================================
const listComponent = {
	bindings: {
		items: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default listComponent;
