// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'eslint:recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: [2, 'single'],
  },
};
