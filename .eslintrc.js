module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    //'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    //'prettier',
    //'prettier/vue',
    //'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'vue'],
  // add your custom rules here 'prettier'삭제함
  rules: {
  //    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5', printWidth: 100, endOfLine:'auto' }],
  //  'import/extensions': [
  //    'error',
  //    'always',
  //    {
  //      js: 'never',
  //      ts: 'never',
  //    },
  //  ],
      'no-console': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      'import/no-dynamic-require': 0,
      'global-require': 0,
      'no-underscore-dangle': 0,
      'class-methods-use-this': 0,
      'vue/max-attributes-per-line': 'off',
  //  'vue/component-name-in-template-casing': [1, 'kebab-case'],
  },
  settings: {
    'import/core-modules': [
      '@nuxt/config',
      '@nuxt/vue-app',
      '@nuxt/types',
      'purgecss-webpack-plugin',
      'vue',
      'vuex',
      'vue-meta',
      'vue-server-renderer',
      'vue-router',
    ],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.json', '.ts', '.vue'],
            alias: {
              '~': __dirname + '/app',
              '@': __dirname + '/app',
            },
          },
        },
      },
    },
  },
};
