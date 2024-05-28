module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  semi: false,
  printWidth: 100,
  useTabs: true,
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": "off",
    "react/jsx-filename-extension": [
      1,
      { "extensions": [
        ".js", ".jsx", ".ts", ".tsx"
        ]
      }
      ],
  }
};
