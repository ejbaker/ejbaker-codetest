// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import getFields from "Res/forms/saveResource";


// CONTROLLER
// =============================================================================
class AddFormController {
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
		this.name = "addForm";
		// initialize adding
		this.adding = false;
		// name form
		this.form = "addForm";
		// model
		this.model = {};
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
		this._Store.add(this.model)
			.then((data) => {
				this.adding = false;
			})
			.catch((err) => {
				this.adding = false;
				console.log("Error catch!", err);
			});
	}
}


// EXPORT
// =============================================================================
export default AddFormController;
