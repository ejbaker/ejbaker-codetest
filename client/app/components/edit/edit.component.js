// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./edit.html";
import controller from "./edit.controller";


// COMPONENT
// =============================================================================
const editComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default editComponent;
