const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    static: path.join(__dirname, "public"),
  },
};
