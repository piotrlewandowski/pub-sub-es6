const webpack = require('webpack');
const path = require('path');

const config = {

  entry: [
    './examples/app',
  ],

  output : {
    filename : 'bundle.js',
    path : path.resolve('./examples'),
  },

  module : {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

}

module.exports = config;