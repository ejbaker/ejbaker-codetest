// CONTROLLER
// =============================================================================
class ResourceController {
	/**
	 * @method $onInit
	 */
	$onInit() {
		this.name = "resource";
		this.recent = (this.type === "recent");
		this.hasLink = (this.item.type !== "book");
	}
}


// EXPORT
// =============================================================================
export default ResourceController;
