function getFields() {
	return [
		{
			key: "type",
			type: "select",
			templateOptions: {
				label: "Type",
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
			key: "name",
			type: "input",
			templateOptions: {
				label: "Name",
				placeholder: "Resource Name",
				required: true,
			},
		},
		{
			key: "author",
			type: "input",
			templateOptions: {
				label: "Author(s)",
				placeholder: "Resource Author",
				required: true,
			},
			hideExpression: "!model.type || model.type !== 'book'",
		},
		{
			key: "creator",
			type: "input",
			templateOptions: {
				label: "Creator(s)",
				placeholder: "Resource Creator",
				required: true,
			},
			hideExpression: "!model.type || (model.type !== 'youtube' && model.type !== 'podcast')",
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
			hideExpression: "!model.type || model.type === 'book'",
		},
	];
}

export default getFields;
