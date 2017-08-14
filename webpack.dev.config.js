const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");

config.output = {
	filename: "[name].bundle.js",
	publicPath: "/",
	path: path.resolve(__dirname, "client"),
};

config.resolve = {
	alias: {
		Common: path.resolve(__dirname, "client/app/common"),
		Comp: path.resolve(__dirname, "client/app/components"),
		Res: path.resolve(__dirname, "client/app/common/resources"),
	},
};

config.plugins = config.plugins.concat([
	// adds hmr support, reloads on js/html/css changes
	new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
