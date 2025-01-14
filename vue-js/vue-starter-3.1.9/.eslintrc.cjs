/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  "rules": {
    "no-console": process.env.NODE_ENV ==="production" ? "error" : "off", //javascript에서 비교연산자는 === 3개를 넣는다.
    "prettier/prettier" : ["error", {
      singleQuote: true,
      semi: true,
      useTabs: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid'
      
    }]
  }
}
