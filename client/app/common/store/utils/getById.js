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
function get(id, data) {
	return find(data, datum => (datum.id === id));
}


// EXPORT
// =============================================================================
export default get;
