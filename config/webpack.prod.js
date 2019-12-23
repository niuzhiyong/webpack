const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 压缩混淆
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 每次打包之前清空打包文件夹
const WebpackManifestPlugin = require('webpack-manifest-plugin'); // 生成打包资源映射路径的json
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