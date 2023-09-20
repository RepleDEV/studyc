const babelOptions = {
  presets: ["babel-preset-gatsby", "@babel/preset-typescript"],
  // plugins: [
  //   ["@babel/plugin-transform-modules-commonjs", {
  //     "allowTopLevelThis": true
  //   }]
  // ],
  "plugins": [["@babel/plugin-transform-private-methods", { "loose": true }]],
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)