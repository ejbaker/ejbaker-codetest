// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import template from "Res/edit/button/button.html";
import controller from "Res/edit/button/button.controller";
import "Res/edit/button/button.scss";


// COMPONENT
// =============================================================================
const editButtonComponent = {
	bindings: {
		item: "<",
	},
	template,
	controller,
};


// EXPORT
// =============================================================================
export default editButtonComponent;
