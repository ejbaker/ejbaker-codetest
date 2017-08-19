// CONTROLLER
// =============================================================================
class RemoveFormController {
	/**
	 * @constructor
	 * @param {object} Store
	 * @param {object} Modal
	 * @param {object} Errors
	 */
	constructor(Store, Modal, Errors) {
		"ngInject";

		// injected dependencies
		this._Store = Store;
		this._Modal = Modal;
		this._Errors = Errors;
	}

	/**
	 * Fires when the controller is finished initializing.
	 *
	 * @method $onInit
	 */
	$onInit() {
		// controller name
		this.name = "removeForm";
	}

	/**
	 * When the form is submitted.
	 *
	 * @method onSubmit
	 */
	onSubmit() {
		// modal options
		const modalOptions = {
			actionButtonText: "Delete",
			bodyText: `Really delete ${this.item.name}?`,
		};
		// confirm delete
		this._Modal.confirm(modalOptions)
			.then(() => this._Store.remove(this.item.id))
			// errors
			.catch(err => this._Errors.catch(err));
	}
}


// EXPORT
// =============================================================================
export default RemoveFormController;
