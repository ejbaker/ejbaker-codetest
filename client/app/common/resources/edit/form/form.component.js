// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./form.html";
import controller from "./form.controller";


// COMPONENT
// =============================================================================
const editFormComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default editFormComponent;
