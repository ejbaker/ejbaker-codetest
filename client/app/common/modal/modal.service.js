// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
// lodash
import { assignIn } from "lodash";
// APP ----------------------------------
import template from "./modal.html";


// SERVICE
// =============================================================================
class Modal {
	/**
	 * @constructor
	 * @param {string} $uibModal
	 */
	constructor($uibModal) {
		"ngInject";

		// DEPENDENCIES ----------------------------------
		this._$uibModal = $uibModal;

		// PROPERTIES ----------------------------------
		// default settings for creating the $uibModal
		this._modalSettings = {
			backdrop: true,
			keyboard: true,
			modalFade: true,
			template,
			windowClass: "modal-secondary",
		};
		// default options for the modal scope
		this._modalOptions = {
			closeButtonText: "Cancel",
			actionButtonText: "OK",
			headerText: "Proceed?",
			bodyText: "Perform this action?",
		};
	}


	// METHODS
	// =============================================================================
	// PRIVATE (but still exposed) ----------------------------------

	/**
	 * Pass parameters to show().
	 *
	 * @method showModal
	 * @param {*} modalOptions 
	 * @param {*} modalOptions 
	 */
	showModal(modalOptions = {}, instanceOptions) {
		// prevent user from dismissing backdrop
		modalOptions.backdrop = "static";
		// show modal
		return this.show(modalOptions, instanceOptions);
	}

	/**
	 * Show a given modal.
	 *
	 * @method show
	 * @param {*} modalSettings 
	 * @param {*} modalOptions 
	 */
	show(modalSettings, modalOptions) {
		// preserve class this
		const vm = this;
		// modal settings
		const settings = {};
		// modal options
		const options = {};
		// combine global defaults with any customizations
		assignIn(settings, vm._modalSettings, modalSettings);
		assignIn(options, vm._modalOptions, modalOptions);
		// add controller
		if (!settings.controller) {
			// syntax to make this directive more component-like
			// for more consistent coding
			settings.controllerAs = "$ctrl";
			settings.bindToController = true;
			// controller
			settings.controller = function ($uibModalInstance) {
				"ngInject";

				// set modal scope
				this.modalOptions = options;

				/**
				 * Perform the action.
				 *
				 * @method ok
				 */
				this.modalOptions.ok = function (result) {
					$uibModalInstance.close(result);
				};

				/**
				 * Dismiss the modal.
				 *
				 * @method close
				 */
				this.modalOptions.close = function () {
					$uibModalInstance.dismiss("cancel");
				};
			};
		}

		// return the $uibModal.open() promise
		return vm._$uibModal.open(settings).result;
	}


	// PUBLIC ----------------------------------

	/**
	 * Confirm an action.
	 *
	 * @method confirm
	 * @param {object} userOptions (optional)
	 */
	confirm(userOptions = {}) {
		// modal options
		const modalOptions = {
			type: "warn",
			closeButtonText: "Cancel",
			actionButtonText: "Confirm",
			headerText: "Please Confirm",
			bodyText: "Are you sure?",
		};
		// return promise with combined options
		return this.showModal({
			windowClass: "modal-warn",
		}, assignIn({}, modalOptions, userOptions));
	}

	/**
	 * Display an error.
	 * 
	 * @method error
	 * @param {object} userOptions (optional)
	 */
	error(userOptions = {}) {
		// modal options
		const modalOptions = {
			closeButtonText: false,
			actionButtonText: "OK",
			headerText: "Error",
			bodyText: "Something went wrong.",
		};
		// return promise with combined options
		return this.showModal({
			windowClass: "modal-danger",
		}, assignIn({}, modalOptions, userOptions));
	}
}


// EXPORT
// =============================================================================
export default Modal;
