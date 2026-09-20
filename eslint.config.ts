import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig({
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@stylistic': stylistic,
  },
  extends: [
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.recommended,
  ],
  languageOptions: {
    parser: tsParser,
  },
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/eol-last': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0}],
    '@stylistic/quotes': ['error', 'single'],

    '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx'}],
    '@stylistic/jsx-closing-bracket-location': 'warn',
    '@stylistic/jsx-equals-spacing': 'warn',
    '@stylistic/jsx-curly-spacing': ['warn', {
      when: 'never',
      children: true
    }],

    '@stylistic/jsx-tag-spacing': 'warn',
    '@stylistic/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
    }],

    '@stylistic/exp-jsx-props-style': ['error', {
      singleLine: {
        maxItems: 2
      },
      multiLine: {
        minItems: 3
      },
    }]
  }
})
