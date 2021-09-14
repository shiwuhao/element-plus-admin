module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "no-unreachable": "off",
    "no-debugger": "off",
    "vue/script-setup-uses-vars": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-model-argument": 'off'
  }
};