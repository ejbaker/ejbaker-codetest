// DEPENDENCIES
// =============================================================================
import { isString } from "lodash";


// METHODS
// =============================================================================

/**
 * Save to localstorage.
 *
 * @param {object} window
 * @param {string} key
 * @param {string} value
 */
function save(window, key, value) {
	// ensure string
	if (!isString(value)) {
		value = JSON.stringify(value);
	}
	// add to storage
	window.localStorage.setItem(key, value);
}


// EXPORT
// =============================================================================
export default save;
