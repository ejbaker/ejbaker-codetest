// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/edit/form/form.html";
import controller from "Res/edit/form/form.controller";
import "Res/edit/form/form.scss";


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
