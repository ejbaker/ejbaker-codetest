// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/list/resources.html";
import controller from "Res/list/resources.controller";
import "Res/list/resources.scss";


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
