// CONTROLLER
// =============================================================================
class ResourceController {
	/**
	 * @method $onInit
	 */
	$onInit() {
		this.name = "resource";
		this.recent = (this.type === "recent");
	}
}


// EXPORT
// =============================================================================
export default ResourceController;