const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "imgs/[hash].[ext]",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
