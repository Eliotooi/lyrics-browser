module.exports = {
  env: {
    es2021: true
  },
  extends: ['@react-native-community', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'import'],
  rules: {
    camelcase: 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          'builtin',
          ['sibling', 'parent'],
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
    // 'max-len': ['error', { code: 60, ignoreComments: true }]
  }
}
