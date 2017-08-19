// DEPENDENCIES
// =============================================================================
// APP ----------------------------------
import getFields from "Res/forms/saveResource";


// CONTROLLER
// =============================================================================
class AddFormController {
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
		this.name = "addForm";
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
			.then(() => (this._$state.go("list")))
			.catch(err => this._Errors.catch(err));
	}
}


// EXPORT
// =============================================================================
export default AddFormController;
