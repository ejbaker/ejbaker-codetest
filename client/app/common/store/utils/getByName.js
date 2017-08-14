// DEPENDENCIES
// =============================================================================
import { find } from "lodash";


// METHODS
// =============================================================================

/**
 * Get by name.
 *
 * @method get
 * @param {string} name
 * @param {array} data
 */
function get(name, data) {
	return find(data, datum => (datum.name === name));
}


// EXPORT
// =============================================================================
export default get;
