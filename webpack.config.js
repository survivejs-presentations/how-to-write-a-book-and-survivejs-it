/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/png',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg',
      include: path.join(__dirname, 'assets')
    }]
  },
  resolve: {
    alias: {
      assets: path.join(__dirname, 'assets'),
      src: path.join(__dirname, 'src')
    }
  }
};
