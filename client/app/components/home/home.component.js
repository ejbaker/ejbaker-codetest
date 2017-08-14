// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "./home.html";
import controller from "./home.controller";
import "./home.scss";


// COMPONENT
// =============================================================================
const homeComponent = {
	bindings: {
		items: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default homeComponent;
