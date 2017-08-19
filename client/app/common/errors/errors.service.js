// SERVICE
// =============================================================================
// lodash
import { isError, has } from "lodash";


// SERVICE
// =============================================================================
class Errors {
	/**
	 * @constructor
	 * @param {object} Modal
	 */
	constructor(Modal) {
		"ngInject";

		// DEPENDENCIES ----------------------------------
		this._Modal = Modal;
	}

	/**
	 * Catch and surface an error.
	 *
	 * @method catch
	 * @param {string} message (optional)
	 * @returns {promise}
	 */
	catch(message = "An error occurred.") {
		// handle actual errors versus status messages
		if (isError(message) && has(message, "message")) {
			return this._Modal.error({ bodyText: message.message });
		}
		// ensure this isn't a cancelled modal
		if (message === "cancel") {
			return false;
		}
		// display the message
		return this._Modal.error({ bodyText: message });
	}
}


// EXPORT
// =============================================================================
export default Errors;
