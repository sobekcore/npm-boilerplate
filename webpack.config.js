const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

const ROOT_PATH = __dirname;

module.exports = {
  mode: "development",
  entry: join(ROOT_PATH, "index.js"),
  output: {
    filename: "[name].bundle.js",
    path: join(ROOT_PATH, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(ROOT_PATH, "index.html"),
      filename: join(ROOT_PATH, "dist/index.html"),
    }),
  ],
};
