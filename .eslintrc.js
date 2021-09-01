module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
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
      "vue/script-setup-uses-vars": "off"
    }
};