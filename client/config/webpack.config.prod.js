const path = require('path');
const { ROOT } = require('../constants/PATHS');

module.exports = {
  mode: 'production',
  context: path.resolve(ROOT),
  entry: path.resolve(ROOT, 'index.prod.jsx'),
  output: {
    filename: 'reservationsBundle.js',
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
                localIdentName: '[hash:base64:8]',
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
};
