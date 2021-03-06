module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'func-names': ['error', 'never'],
    'no-confusing-arrow': [0],
    'max-len': ['error', 120],
    'no-eval': [0]
  },
  env: {
    node: true,
    mocha: true
  }
};
