module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-undef': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'vue/multi-word-component-names': 'off',
  },
}
