// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/removeResource/removeResource.html";
import controller from "Res/removeResource/removeResource.controller";
import "Res/removeResource/removeResource.scss";


// COMPONENT
// =============================================================================
const removeResourceComponent = {
	bindings: {
		id: "@",
		resourceName: "@",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default removeResourceComponent;
