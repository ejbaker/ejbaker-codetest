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
		// default options
		this.modalDefaults = {
			backdrop: true,
			keyboard: true,
			modalFade: true,
			template,
			windowClass: "modal-secondary",
		};
		// default options
		this.modalOptions = {
			closeButtonText: "Cancel",
			actionButtonText: "OK",
			headerText: "Proceed?",
			bodyText: "Perform this action?",
		};
	}

	/**
	 * Pass parameters to show.
	 *
	 * @method showModal
	 * @param {*} modalDefaults 
	 * @param {*} modalOptions 
	 */
	showModal(modalDefaults = {}, modalOptions) {
		// prevent user from dismissing backdrop
		modalDefaults.backdrop = "static";
		// show modal
		return this.show(modalDefaults, modalOptions);
	}

	/**
	 * Show a given modal.
	 *
	 * @method show
	 * @param {*} modalDefaults 
	 * @param {*} modalOptions 
	 */
	show(modalDefaults, modalOptions) {
		// preserve class this
		const vm = this;
		const defaults = {};
		const options = {};
		// combine global defaults with any customizations
		assignIn(defaults, vm.modalDefaults, modalDefaults);
		assignIn(options, vm.modalOptions, modalOptions);
		// add controller
		if (!defaults.controller) {
			defaults.controllerAs = "$ctrl";
			defaults.bindToController = true;
			defaults.controller = function ($uibModalInstance) {
				"ngInject";

				// set modal options
				this.modalOptions = options;

				/**
				 * Confirm.
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
		// return the modal promise
		return vm._$uibModal.open(defaults).result;
	}

	// METHODS
	// =============================================================================

	/**
	 * Confirm an action.
	 *
	 * @method confirm
	 * @param {object} options
	 */
	confirm(options = {}) {
		// modal options
		const modalOptions = {
			type: "warn",
			closeButtonText: "Cancel",
			actionButtonText: "Confirm",
			headerText: "Please Confirm",
			bodyText: "Are you sure?",
		};
		// return promise
		return this.showModal({
			windowClass: "modal-warn",
		}, assignIn({}, modalOptions, options));
	}

	/**
	 * Display an error.
	 * 
	 * @method error
	 * @param {object} options
	 */
	error(options = {}) {
		// modal options
		const modalOptions = {
			closeButtonText: false,
			actionButtonText: "OK",
			headerText: "Error",
			bodyText: "Something went wrong.",
		};
		// return promise
		return this.showModal({
			windowClass: "modal-danger",
		}, assignIn({}, modalOptions, options));
	}
}


// EXPORT
// =============================================================================
export default Modal;
