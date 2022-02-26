const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
    // Remove unnecessary files from the output folder
    new CleanWebpackPlugin(),

    // Load all the assets to an entry HTML file
    new HtmlWebpackPlugin({
      template: join(ROOT_PATH, "index.html"),
      filename: join(ROOT_PATH, "dist/index.html"),
    }),

    // Copy chosen assets to the output folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(ROOT_PATH, "index.css"),
          to: join(ROOT_PATH, "dist/index.css"),
        },
      ],
    }),
  ],
};
