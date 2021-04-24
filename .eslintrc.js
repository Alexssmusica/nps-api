module.exports = {
	env: {
		"browser": true,
		"es2021": true,
		"jest": true,
		"node": true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'camelcase': 'off',
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-unused-vars": "off"
	}
};