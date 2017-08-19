// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
// lodash
import { isEmpty, isString, sortBy } from "lodash";
// APP ----------------------------------
// localStorage methods
import { list as listResources, save } from "./local";
// utilities
import { getById, getByIds, ensureUniq, removeByIds } from "./utils";

// SERVICE
// =============================================================================
class Store {
	/**
	 * @constructor
	 * @param {string} STORAGE_KEY
	 * @param {object} uuid
	 * @param {object} $window
	 */
	constructor(STORAGE_KEY, uuid, $window) {
		"ngInject";

		// DEPENDENCIES ----------------------------------
		this._$window = $window;
		this._uuid = uuid;
		this._STORAGE_KEY = STORAGE_KEY;

		// PROPERTIES ----------------------------------
		// data
		this._resources = listResources(this._$window, this._STORAGE_KEY);
	}

	/**
	 * Return all the existing resources.
	 *
	 * @method list
	 * @param {number} count (optional)
	 * @returns {promise}
	 */
	list(count) {
		// are we only returning the most recent?
		if (count) {
			return this.listRecent(count);
		}
		// return the data
		return Promise.resolve(this._resources);
	}

	/**
	 * Return most recent resources.
	 *
	 * @method listResources
	 * @param {number} count (optional)
	 * @returns {promise}
	 */
	listRecent(count = 5) {
		// sort by date, return the most recent 5
		const sortedData = sortBy(this._resources, "added");
		// return the first 5
		return Promise.resolve(sortedData.slice(0, count));
	}

	/**
	 * Get a resource by ID.
	 *
	 * @method get
	 * @param {array} resourceIds
	 * @returns {promise}
	 */
	get(resourceId) {
		// error check
		const existingData = getById(resourceId, this._resources);
		// make sure data exists
		if (isEmpty(existingData)) {
			return Promise.reject("No resource with that ID!");
		}
		// and return promise
		return Promise.resolve(existingData);
	}

	/**
	 * Add a new resource.
	 *
	 * @method add
	 * @param {object} resource
	 * @returns {promise}
	 */
	add(resource) {
		// error check
		if (ensureUniq(resource.name, resource.type, this._resources)) {
			return Promise.reject("Resource exists!");
		}
		// otherwise, add uuid...
		resource.id = this._uuid.v4();
		// and dates...
		resource.added = new Date();
		resource.updated = new Date();
		// get data...
		const data = this._resources;
		// and add to data...
		data.push(resource);
		// save...
		save(this._$window, this._STORAGE_KEY, data);
		// and return promise
		return Promise.resolve(this._resources);
	}

	/**
	 * Update a resource.
	 *
	 * @method edit
	 * @param {object} resource
	 * @returns {promise}
	 */
	edit(resource) {
		// get the data
		const data = this._resources;
		// get index of resource
		const index = data.findIndex((datum => datum.id === resource.id));
		// make sure data exists
		if (!(index > -1)) {
			return Promise.reject("No resource with that ID!");
		}
		// change updated date
		resource.updated = new Date();
		// otherwise, update data...
		data[index] = resource;
		// save...
		save(this._$window, this._STORAGE_KEY, data);
		// and return promise
		return Promise.resolve(this._resources);
	}

	/**
	 * Remove a resource.
	 *
	 * @method remove
	 * @param {array} resourceIds
	 * @returns {promise}
	 */
	remove(resourceIds) {
		// ensure array
		if (isString(resourceIds)) {
			resourceIds = [resourceIds];
		}
		// error check
		const existingData = getByIds(resourceIds, this._resources);
		// make sure data exists
		if (isEmpty(existingData)) {
			return Promise.reject("No resource with that ID!");
		}
		// save...
		save(this._$window, this._STORAGE_KEY, removeByIds(resourceIds, this._resources));
		// and return promise
		return Promise.resolve(this._resources);
	}
}

// EXPORT
// =============================================================================
export default Store;
