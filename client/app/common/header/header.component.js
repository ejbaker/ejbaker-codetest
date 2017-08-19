// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./header.html";
import controller from "./header.controller";
import "./header.scss";


// COMPONENT
// =============================================================================
const headerComponent = {
	bindings: {
		pageTitle: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default headerComponent;
