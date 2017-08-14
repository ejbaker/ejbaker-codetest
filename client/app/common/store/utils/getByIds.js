// DEPENDENCIES
// =============================================================================
import { find, includes } from "lodash";


// METHODS
// =============================================================================

/**
 * Get by name.
 *
 * @method get
 * @param {string} name
 * @param {array} data
 */
function get(ids, data) {
	return find(data, datum => (includes(ids, datum.id)));
}


// EXPORT
// =============================================================================
export default get;
