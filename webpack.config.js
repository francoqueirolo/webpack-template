const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './main.js'
  },
  watch:true,
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: debug ? [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin("./style.css"),
  ] : [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin("./style.css"),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
]
};