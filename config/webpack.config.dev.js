const path = require('path');
const ROOT_PATH = require('../constants/ROOT_DIR');

module.exports = {
  mode: 'development',
  context: path.resolve(ROOT_PATH, 'client'),
  entry: path.resolve(ROOT_PATH, 'client', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'public'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};
