const { join, resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: join(__dirname, 'public'),
    filename: 'js/bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /.js(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'sass-loader',
            },
          ], // end ExtractTextPlugin's use
        }),
      }, // end scss rule
    ],
  }, // end module
  resolve: {
    modules: [
      resolve('/'),
      'node_modules/',
    ],
    extensions: ['.js',],
    unsafeCache: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ExtractTextPlugin('css/bundle.min.css'),
  ],
  mode: 'development',
  devtool: 'source-map',
  stats: { colors: true },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};