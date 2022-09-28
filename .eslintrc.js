module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'prettier/prettier': [
					'error',
					{
						endOfLine: 'auto',
					},
				],
				'no-console': ['warn', { allow: ['warn', 'error'] }],
				'no-debugger': 'warn',
				'consistent-return': 'warn',
				yoda: 'error',
				'no-alert': 'error',
				'no-empty': 'error',
				'default-case': 'error',
				'no-unreachable': 'error',
				'no-useless-return': 'error',
				'no-nested-ternary': 'error',
				'no-duplicate-case': 'error',
				'no-duplicate-imports': 'error',
				'react/jsx-filename-extensions': 'off',
				'react/jsx-boolean-value': ['error', 'never'],
				'react/boolean-prop-naming': [
					'error',
					{ rule: '^(is|with|without|has)[A-Z]([A-Za-z0-9]?)+' },
				],
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',
				curly: 'off',
				'react/no-array-index-key': 'error',
				'react/prop-types': 'off',
				'react/display-name': 'off',
			},
		},
	],
};