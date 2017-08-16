// CONTROLLER
// =============================================================================
class RemoveFormController {
	/**
	 * @constructor
	 * @param {object} Store
	 */
	// constructor(Modal, Store) {
	constructor(Store) {
		"ngInject";

		// injected dependencies
		this._Store = Store;
		// this._Modal = Modal;
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
		console.log("Deleting...");
		// confirm delete
		// const deleteConfirmationModal = this._Modal.confirm.delete(() => {
		// remove from store
		this._Store.remove(this.item.id)
			.then((data) => {
				console.log("Deleted!");
			})
			.catch((err) => {
				console.log("Error catch!", err);
			});
		// });
		// pass context
		// deleteConfirmationModal(this.resourceName);
	}
}


// EXPORT
// =============================================================================
export default RemoveFormController;
