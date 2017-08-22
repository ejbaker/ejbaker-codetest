// CONTROLLER
// =============================================================================
class ResourcesController {
	/**
	 * @constructor
	 * @param {object} $sce
	 */
	constructor($sce) {
		"ngInject";

		this._$sce = $sce;
	}

	/**
	 * @method $onInit
	 */
	$onInit() {
		// preserve this
		const vm = this;
		// view type controls how much detail we see
		const viewAll = vm.type === "all";
		// name
		vm.name = "resources";
		// sorting
		vm.sortType = ["type", "name"];
		vm.sortReverse = false;
		// headers
		vm.rowHeaders = [
			{
				label: "Name",
				key: "name",
				classes: !viewAll ? "col-xs-5 col-sm-5" : "col-xs-3 col-sm-4",
			},
			{
				label: vm._$sce.trustAsHtml("Desc<span class=\"sr-only-sm-down\">ription</span>"),
				key: "desc",
				classes: !viewAll ? "col-xs-6 col-sm-6" : "col-xs-4 col-sm-5",
			},
			{
				label: "Type",
				key: "type",
				classes: "col-xs-2 col-sm-1",
			},
		];
		// conditionally add "manage" row
		if (viewAll) {
			vm.rowHeaders.push({
				label: "Manage",
				classes: "col-xs-3 col-sm-2",
			});
		}
	}

	/**
	 * @method changeSort
	 * @param {string} type
	 */
	changeSort(type) {
		if (!type) {
			return;
		}
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
