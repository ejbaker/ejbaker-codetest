// DEPENDENCIES
// =============================================================================
// THIRD-PARTY ----------------------------------
// lodash
import { find, includes, isEmpty, isString, remove } from "lodash";
// APP ----------------------------------
// local storage methods
import { get, save } from "./methods";

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

		// METHODS ----------------------------------
		// get
		this._list = () => {
			// attempt to get data from storage
			let data = get(this._$window, this._STORAGE_KEY);
			// the user hasn't added any data yet!
			if (isEmpty(data)) {
				data = [];
			}
			// return data
			return data;
		};
		// save
		this._save = data => save(this._$window, this._STORAGE_KEY, data);
	}

	/**
	 * Return all the existing resources.
	 *
	 * @method list
	 * @returns {promise}
	 */
	list() {
		// return the data
		return Promise.resolve(this._list());
	}

	/**
	 * Add a new resource.
	 *
	 * @method add
	 * @param {object} resource
	 * @returns {promise}
	 */
	add(resource) {
		// attempt to get data from storage
		const data = this._list();
		// error check
		if (find(data, datum => (datum.name === resource.name))) {
			return Promise.reject("Resource exists!");
		}
		// otherwise, add uuid...
		resource.id = this._uuid.v4();
		// resource.id = new Date().toISOString;
		// and add to data
		data.push(resource);
		// save...
		this._save(data);
		// and return promise
		return Promise.resolve(data);
	}

	/**
	 * Update a resource.
	 *
	 * @method update
	 * @param {object} resource
	 * @returns {promise}
	 */
	update(resource) {
		// attempt to get data from storage
		const data = this._list();
		// error check
		const existingData = find(data, datum => (datum.id === resource.id));
		// make sure data exists
		if (!existingData) {
			return Promise.reject("No resource with that ID!");
		}
		// otherwise, remove...
		remove(data, datum => (datum.id === resource.id));
		// add back...
		data.push(resource);
		// save...
		this._save(data);
		// and return promise
		return Promise.resolve(data);
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
		// attempt to get data from storage
		const data = this._list();
		// error check
		const existingData = find(data, datum => (includes(resourceIds, datum.id)));
		// make sure data exists
		if (isEmpty(existingData)) {
			return Promise.reject("No resource with that ID!");
		}
		// otherwise, remove...
		remove(data, datum => (includes(resourceIds, datum.id)));
		// save...
		this._save(data);
		// and return promise
		return Promise.resolve(data);
	}
}

// EXPORT
// =============================================================================
export default Store;
