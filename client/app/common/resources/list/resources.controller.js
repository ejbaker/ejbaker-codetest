// CONTROLLER
// =============================================================================
class ResourcesController {
	/**
	 * @method $onInit
	 */
	$onInit() {
		// name
		this.name = "resources";
		// view type controls how much detail we see
		const viewAll = this.type === "all";
		// sorting
		this.sortType = ["type", "name"];
		this.sortReverse = false;
		// headers
		this.rowHeaders = [
			{
				label: "Name",
				key: "name",
				classes: viewAll ? "col-md-4" : "col-md-5",
			},
			{
				label: "Description",
				key: "desc",
				classes: viewAll ? "col-md-5" : "col-md-6",
			},
			{
				label: "Type",
				key: "type",
				classes: "col-md-1",
			},
		];
		// conditionally add "manage" row
		if (viewAll) {
			this.rowHeaders.push({
				label: "Manage",
				classes: "col-md-2",
			});
		}
	}

	/**
	 * @method changeSort
	 * @param {string} type
	 */
	changeSort(type) {
		// we're changing sort types
		if (type !== this.sortType[0]) {
			// reset sortReverse to false
			this.sortReverse = false;
			// change sortType
			const secondType = (type !== name) ? "name" : "type";
			this.sortType = [type, secondType];
		}
		// otherwise, just toggle reverse
		else {
			this.sortReverse = !this.sortReverse;
		}
	}
}


// EXPORT
// =============================================================================
export default ResourcesController;
