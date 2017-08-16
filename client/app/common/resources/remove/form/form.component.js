// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/remove/form/form.html";
import controller from "Res/remove/form/form.controller";
import "Res/remove/form/form.scss";


// COMPONENT
// =============================================================================
const removeFormComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default removeFormComponent;
