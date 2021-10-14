module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
  babel: {
    env: {
      test: {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      },
    },
  },
};
