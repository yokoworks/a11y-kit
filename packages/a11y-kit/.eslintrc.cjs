// 最低限で動くやつ（TypeScript向け）
module.exports = {
  root: true,
  ignorePatterns: ['dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
