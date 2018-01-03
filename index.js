module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  globals: {
    __BROWSER__: true,
    __DEV__: true,
    __LOC__: true,
    __MOCK__: true,
    __PROJECT__: true,
    __ROOT__: true,
    __TEST__: true,
  },
  rules: {
    'arrow-body-style': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'global-require': 0,
    'function-paren-newline': 0,

    'import/extensions': 0,
    'import/first': 0,
    'import/no-duplicates': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'max-len': 1,
    'no-case-declarations': 1,
    'no-param-reassign': 1,
    'no-prototype-builtins': 1,
    'no-return-assign': 1,
    'no-shadow': 1,
    'no-underscore-dangle': 1,
    'object-curly-newline': 0,

    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,

    semi: [2, 'never'],
  },
}
