// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import getFields from "Res/forms/saveResource";


// CONTROLLER
// =============================================================================
class EditResourceController {
	/**
	 * @constructor
	 * @param {object} Store
	 */
	constructor(Store) {
		"ngInject";

		// injected dependencies
		this._Store = Store;
	}

	/**
	 * Fires when the controller is finished initializing.
	 *
	 * @method $onInit
	 */
	$onInit() {
		// controller name
		this.name = "editResource";
		// initialize editing
		this.editing = false;
		// name form
		this.form = "editForm";
		// copy existing item onto the model
		this.model = JSON.parse(JSON.stringify(this.item));
		// formly options
		this.options = {};
		// formly fields
		this.fields = getFields();
	}

	/**
	 * When the form is submitted.
	 *
	 * @method onSubmit
	 */
	onSubmit() {
		const vm = this;
		vm.editing = false;
		vm._Store.edit(vm.model)
			.then()
			.catch((err) => {
				console.log("Error catch!", err);
			});
	}
}


// EXPORT
// =============================================================================
export default EditResourceController;
