module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		es6: true,
		node: true
	},
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'standard'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'semi': [1, 'always'],
		'indent': ['error', 4, { ignoredNodes: ['ConditionalExpression'], ignoreComments: true }],
		'eol-last': 'off',
		'no-tabs': 'off',
		'camelcase': 'off',
		'no-undef': 'off',
		'@typescript-eslint/ban-types': 'off',
		'prettier/prettier': 'off',
		'no-multiple-empty-lines': 'off',
		'padded-blocks': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		'no-unused-vars': ['off', { 'varsIgnorePattern': '^_' }],
		'@typescript-eslint/no-unused-vars': ['off', { 'varsIgnorePattern': '^_' }],
	}
};