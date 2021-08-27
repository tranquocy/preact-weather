const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [2, prettierOptions],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'newline-per-chained-call': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': [0, { ignore: ['tests/'] }],
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'react/no-unknown-property': 0,
  },
};
