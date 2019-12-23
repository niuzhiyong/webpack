const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin(),
    new WebpackManifestPlugin(),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})