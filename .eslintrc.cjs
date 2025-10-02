const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = [
  ...compat.extends('eslint:recommended'),
  { ignores: ['dist', 'node_modules'] },
];
