const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './lib/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{test: /\.tsx?$/, loader: 'ts-loader'}],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    port: 4200,
    contentBase: [path.resolve(__dirname, '../../public')],
  },
};
