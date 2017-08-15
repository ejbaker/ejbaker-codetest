// CONTROLLER
// =============================================================================
class RemoveResourceController {
	/**
	 * @constructor
	 * @param {object} Store
	 * @param {object} Modal
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
		this.name = "removeResource";
	}

	/**
	 * When the form is submitted.
	 *
	 * @method onSubmit
	 */
	onSubmit() {
		// confirm delete
		// const deleteConfirmationModal = this._Modal.confirm.delete(() => {
		// remove from store
		this._Store.remove(this.id)
			.then()
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
export default RemoveResourceController;
