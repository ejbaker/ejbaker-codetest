// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
// lodash
import { isEmpty, isString } from "lodash";
// APP ----------------------------------
// local storage methods
import { list as listResources, save } from "./local";
import { getByIds, getByName, removeByIds } from "./utils";

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
	 * @returns {promise}
	 */
	list() {
		// return the data
		return Promise.resolve(this._resources);
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
		if (getByName(resource.name, this._resources)) {
			return Promise.reject("Resource exists!");
		}
		// otherwise, add uuid...
		resource.id = this._uuid.v4();
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
