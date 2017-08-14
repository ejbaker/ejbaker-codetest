// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/editResource/editResource.html";
import controller from "Res/editResource/editResource.controller";
import "Res/editResource/editResource.scss";


// COMPONENT
// =============================================================================
const editResourceComponent = {
	bindings: {
		item: "=",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default editResourceComponent;
