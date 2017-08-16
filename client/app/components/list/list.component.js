// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./list.html";
import controller from "./list.controller";
import "./list.scss";


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
