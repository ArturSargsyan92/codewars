module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  env: {
    node: true,
    es2021: true
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/quotes": [2, "double", { "avoidEscape": true }],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true,
        "ignoreStrings": true
      }
    ],
    "curly":["error", "all"],
    "camelcase": ["error"],
    "require-jsdoc" : 0,
    "brace-style": ["error", "1tbs"],
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "object-curly-spacing": ["error", "always"],
    "import/prefer-default-export": "off",
    "space-in-parens": ["error"],
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",                                                                     
    "no-console": ["warn"],
    "new-cap": "off",
    "max-classes-per-file": "off",
    "no-param-reassign": "off",
    "newline-after-var": ["error", "always"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
          "multiline": {
              "delimiter": "semi",
              "requireLast": true
          },
          "singleline": {
              "delimiter": "semi",
              "requireLast": false
          }
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "public-instance-field",
          "private-static-field",
          "private-instance-field",
          "constructor",
          "public-static-method",
          "public-instance-method",
          "private-static-method",
          "private-instance-method",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["test/**/*"],
      rules: {
        "class-methods-use-this": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-throw-literal": "off"
      },
    },
  ],
}
