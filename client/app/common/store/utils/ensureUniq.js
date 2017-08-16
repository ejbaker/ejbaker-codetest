// DEPENDENCIES
// =============================================================================
import { find } from "lodash";


// METHODS
// =============================================================================

/**
 * Ensure uniqueness.
 *
 * @method get
 * @param {string} name
 * @param {string} type
 * @param {array} data
 */
function get(name, type, data) {
	return find(data, datum => (datum.name === name && datum.type === type));
}


// EXPORT
// =============================================================================
export default get;
