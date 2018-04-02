{
  "env": {
    "es6": true,
    "jquery": true,
    "browser": true,
    "amd": true,
    "commonjs": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "globals": {
    "alert": false,
    "clearTimeout": false,
    "clearInterval": false,
    "document": false,
    "exports": false,
    "module": false,
    "navigator": false,
    "require": false,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
  },
  "rules": {
    "camelcase": ["error", { "properties": "always" }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "valid-jsdoc": [
      "warn", {
        "requireReturn": false,
        "preferType": {
          "Boolean": "boolean",
          "String": "string",
          "Number": "number",
          "object": "Object",
          "array": "Array",
          "function": "Function",
          "element": "Element",
          "any": "*"
        }
      }
    ],
    "block-scoped-var": "warn",
    "curly": "error",
    "eqeqeq": "warn",
    "quotes": ["error", "single"],
    "semi": "error",
    "no-inline-comments": "warn",
    "no-debugger": "error",
    "no-console": "warn",
    "no-empty": "warn",
    "no-spaced-func": "warn",
    "no-array-constructor": "error",
    "no-undefined": "warn",
    "no-alert": "warn",
    "no-loop-func": "error",
    "no-extra-semi": "error",
    "no-multi-spaces": "error",
    "no-new": "error",
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-unused-vars": "warn",
    "no-use-before-define": ["error", { "functions": false }],
    "object-curly-spacing": ["warn", "always"],
    "space-before-blocks": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "no-new-object": "error",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "space-infix-ops": ["error"],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
    "no-var": "error",
    "no-const-assign": "error",
    "object-shorthand": "error",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "no-duplicate-imports": "error",
  }
}