// CONTROLLER
// =============================================================================
class EditResourceController {
	/**
	 * @constructor
	 * @param {object} Store
	 */
	constructor(Store) {
		"ngInject";

		// injected dependencies
		this._Store = Store;
	}

	/**
	 * Fires when the controller is finished initializing.
	 *
	 * @method $onInit
	 */
	$onInit() {
		// controller name
		this.name = "editResource";
		// initialize editing
		this.editing = false;
		// copy existing item onto the model
		this.model = JSON.parse(JSON.stringify(this.item));
		// formly options
		this.options = {};
		// formly fields
		this.fields = [
			{
				key: "name",
				type: "input",
				templateOptions: {
					label: "Name",
					placeholder: "Resource Name",
					required: true,
				},
			},
			{
				key: "type",
				type: "select",
				templateOptions: {
					label: "Type",
					notNull: true,
					options: [
						{
							name: "Book",
							value: "book",
						},
						{
							name: "Podcast",
							value: "podcast",
						},
						{
							name: "Website",
							value: "website",
						},
						{
							name: "YouTube Channel",
							value: "youtube",
						},
					],
				},
			},
			{
				key: "desc",
				type: "textarea",
				templateOptions: {
					label: "Description",
					placeholder: "A really awesome resource for Subject that I use every day.",
					required: true,
				},
			},
			{
				key: "ref",
				type: "input",
				templateOptions: {
					type: "url",
					label: "Reference",
					placeholder: "http://somewhere.you.can.find.this.com/",
					required: true,
				},
			},
		];
	}

	/**
	 * When the form is submitted.
	 *
	 * @method onSubmit
	 */
	onSubmit() {
		this._Store.edit(this.model)
			.then((data) => {
				this.editing = false;
			})
			.catch((err) => {
				this.editing = false;
				console.log("Error catch!", err);
			});
	}
}


// EXPORT
// =============================================================================
export default EditResourceController;
