// DEPENDENCIES
// =============================================================================
import { isString } from "lodash";


// METHODS
// =============================================================================

/**
 * Get from localstorage.
 *
 * @method get
 * @param {object} window
 * @param {string} key
 */
function get(window, key) {
	// get data
	const data = window.localStorage.getItem(key);
	// no need to parse data
	if (!isString(data)) {
		return data;
	}
	// otherwise, parse it
	return JSON.parse(data);
}


// EXPORT
// =============================================================================
export default get;
