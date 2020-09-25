const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
const HOST = 'localhost'
const PORT = 3000
const HTTPS = false
 
module.exports = {
 mode: 'development',
 
 context: __dirname,
 
 entry: {
  app: './src/index.ts'
 },
 
 output: {
  publicPath: '/dist',
  path: path.resolve(__dirname, 'dist'),
  filename: 'index.js',
  hotUpdateChunkFilename: 'hot/hot-update.js',
  hotUpdateMainFilename: 'hot/hot-update.json'
 },
 
 module: {
  rules: [
   { test: /\.ts/, use: 'ts-loader', exclude: /node_modules/ }
  ]
 },
 
 resolve: {
  extensions: ['.ts', '.js']
 },
 
 plugins: [
  new HtmlWebpackPlugin({
   title: '模块热替换',
   template: './public/index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  // 启动输出清理
  new FriendlyErrorsWebpackPlugin({
   compilationSuccessInfo: {
    messages: [`You application is running here ${HTTPS ? 'https' : 'http'}://${HOST}:${PORT}`],
    // notes: ['Some additional notes to be displayed upon successful compilation'],
    clearConsole: true
   },
  })
 ],
 
 devServer: {
  contentBase: __dirname,
  quiet: true,
  compress: true,
  port: PORT,
  host: HOST,
  https: HTTPS,
  // hot: true,
  // hotOnly: true,
  // inline: true,
  open: true,
  overlay: true,
  openPage: './dist/index.html'
 }
}