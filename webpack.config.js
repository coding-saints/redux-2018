const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./reactStartup.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      "simple-react-bootstrap":
        "node_modules/simple-react-bootstrap/dist/simple-react-bootstrap.js",
      jscolor: "util/jscolor.js"
    },
    modules: [path.resolve("./"), path.resolve("./node_modules")]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
