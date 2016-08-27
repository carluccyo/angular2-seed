var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Webpack Config
var webpackConfig = {

  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor': './src/vendor.browser.ts',
    'main': './src/main.browser.ts',
    'vendor-style': './src/vendor-style.ts',
    'app-style': './src/app-style.ts',
  },

  cache: true,

  output: {
    path: './dist',
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?prefix=font/&limit=5000"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }

};


// Our Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
