// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
//	parser: "babel-eslint",
	extends: "airbnb-base",
	parserOptions: {
		sourceType: "module",
		allowImportExportEverywhere: true,
		codeFrame: false
	},
	// environments
	env: {
		node: true,
		browser: true,
		es6: true,
		jasmine: true,
		mocha: true,
	},
	// overrides
	rules: {
		// allow dev dependency import (webpack)
		"import/no-extraneous-dependencies": [2, { devDependencies: true }],
		// brace style
		"brace-style": [
			"error",
			"stroustrup",
		],
		// allow anonymous functions
		"func-names": "off",
		// allow requires
		"global-require": "off",
		// don't require .vue extension when importing
		"import/extensions": ["error", "always", {
			"js": "never",
		}],
		// requires new lines after each import
		"import/newline-after-import": "off",
		"import/first": 0,
		// tab style
		indent: ["error", "tab"],
		// linebreak style
		"linebreak-style": [ "error", "unix" ],
		// only in production
		"no-console": process.env.NODE_ENV === "production" ? 2 : 0,
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		// I think I can handle the power, airbnb
		"no-param-reassign": "off",
		"no-plusplus": 0,
		"no-underscore-dangle": 0,
		// let functions be hoisted
		"no-use-before-define": [ "error", "nofunc" ],
		// tab style
		"no-tabs": "off",
		// double quotes only
		quotes: ["error", "double"],
		// semi-colons
		semi: ["error", "always"],
	}
}
