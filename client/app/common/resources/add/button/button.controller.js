// CONTROLLER
// =============================================================================
class AddButtonController {
	/**
	 * @constructor
	 */
	constructor() {
		"ngInject";
	}

	/**
	 * Fires when the controller is finished initializing.
	 *
	 * @method $onInit
	 */
	$onInit() {
		// controller name
		this.name = "addButton";
		// initialize adding
		this.adding = false;
		// name form
		this.form = "addForm";
	}
}


// EXPORT
// =============================================================================
export default AddButtonController;
