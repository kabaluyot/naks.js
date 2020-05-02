module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    semi: 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      // disable the rule for some config files
      files: ['nuxt.config.js'],
      rules: {
        'no-unused-vars': 'off'
      }
    },
    {
      // disable the rule for test files
      files: ['test/*.js'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
