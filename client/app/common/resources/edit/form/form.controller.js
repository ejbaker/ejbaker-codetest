// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import getFields from "Res/forms/saveResource";


// CONTROLLER
// =============================================================================
class EditResourceController {
	/**
	 * @constructor
	 * @param {object} $state
	 * @param {object} Store
	 * @param {object} Errors
	 */
	constructor($state, Store, Errors) {
		"ngInject";

		// injected dependencies
		this._$state = $state;
		this._Store = Store;
		this._Errors = Errors;
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
		this.model = this.item ? JSON.parse(JSON.stringify(this.item)) : {};
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
		this.editing = false;
		this._Store.edit(this.model)
			.then(() => (this._$state.go("list")))
			.catch(err => this._Errors.catch(err));
	}
}


// EXPORT
// =============================================================================
export default EditResourceController;
