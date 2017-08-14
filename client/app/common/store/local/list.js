// DEPENDENCIES
// =============================================================================
import { isEmpty, isString } from "lodash";


// METHODS
// =============================================================================

/**
 * List from localstorage.
 *
 * @method list
 * @param {object} window
 * @param {string} key
 */
function list(window, key) {
	// list data
	let data = window.localStorage.getItem(key);
	// data should always be a string, but just in case
	if (isString(data)) {
		data = JSON.parse(data);
	}
	// is empty?
	if (isEmpty(data)) {
		return [];
	}
	// otherwise...
	return data;
}


// EXPORT
// =============================================================================
export default list;
