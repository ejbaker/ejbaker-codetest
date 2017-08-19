const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "source-map",
	entry: {},
	resolve: {
		alias: {
			Common: path.resolve(__dirname, "client/app/common"),
			Comp: path.resolve(__dirname, "client/app/components"),
			Res: path.resolve(__dirname, "client/app/common/resources"),
		},
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: "ng-annotate!babel" },
			{ test: /\.html$/, loader: "raw" },
			{ test: /\.(scss|sass)$/, loader: "style!css!sass" },
			{ test: /\.css$/, loader: "style!css" },
		],
	},
	plugins: [
		// Injects bundles in your index.html instead of wiring all manually.
		// It also adds hash to all injected assets so we don't have problems
		// with cache purging during deployment.
		new HtmlWebpackPlugin({
			template: "client/index.html",
			inject: "body",
			hash: true,
		}),

		// Automatically move all modules defined outside of application directory 
		// to vendor bundle.
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			// eslint-disable-next-line no-unused-vars
			minChunks(module, count) {
				return module.resource && module.resource.indexOf(path.resolve(__dirname, "client")) === -1;
			},
		}),
	],
};
