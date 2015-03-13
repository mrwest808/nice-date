'use strict';

var webpack = require('webpack'),
    minimize = new webpack.optimize.UglifyJsPlugin();

module.exports = {

  entry: "./src/nd.js",
  output: {
    filename: "nd.min.js",
    library: "NiceDate",
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [minimize]

};