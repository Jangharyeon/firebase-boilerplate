'use strict';

const webpack = require('webpack');
const { resolve } = require('path');
const { PATHS, ENV } = require('./app-config');

module.exports = {
  mode: ENV,

  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'assets/dist'),
  },

  resolve: {
    alias: {
      'js': resolve(PATHS.JS_DIR),
      'partials': resolve(PATHS.PARTIAL_DIR),
    },

    extensions: ['.js', '.hbs'],

    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            babelrc: false,
          },
        }],
      },
      {
        test: /\.hbs/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              helperDirs: [PATHS.HELPER_DIR],
              partialsDirs: [PATHS.PARTIAL_DIR],
              runtime: 'handlebars/runtime',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};