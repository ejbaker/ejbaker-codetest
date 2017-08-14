// DEPENDENCIES
// =============================================================================
import { isString, includes, remove } from "lodash";


// METHODS
// =============================================================================

/**
 * Remove by ID(s).
 *
 * @method removeByIds
 * @param {string} name
 * @param {array} data
 */
function removeByIds(ids, data) {
	// ensure array
	if (isString(ids)) {
		ids = [ids];
	}
	// remove
	remove(data, datum => (includes(ids, datum.id)));
	// return
	return data;
}


// EXPORT
// =============================================================================
export default removeByIds;
