module.exports = {
  "prettier.useEditorConfig": false,
  "prettier.printWidth": 160,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "prettier.semi": true,
  "prettier.trailingComma": "all",
  "prettier.bracketSpacing": true,
  "prettier.bracketSameLine": true, //
  "prettier.arrowParens": "avoid",
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.endOfLine": "auto",
  "prettier.jsxSingleQuote": false,
  "prettier.singleQuote": false,
  "prettier.proseWrap": "preserve",
  "prettier.overrides": [{ files: "*.json", options: { printWidth: 200 } }],
  "prettier.disableLanguages": ["md", "txt", "xlsx"],
};
