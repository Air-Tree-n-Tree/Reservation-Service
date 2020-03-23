const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ROOT, CLIENT } = require('../constants/PATHS');

module.exports = {
  mode: 'development',
  context: path.resolve(CLIENT),
  entry: path.resolve(CLIENT, 'index.dev.jsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(CLIENT, 'templates', 'index.html'),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(ROOT, 'public'),
    port: 9000,
  },
};
