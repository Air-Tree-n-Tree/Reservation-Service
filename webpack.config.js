const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'server', 'src', 'lib', 'ssr.jsx'),
  output: {
    path: path.resolve(__dirname, 'build', 'server', 'src', 'lib'),
    filename: 'ssr.js',
    libraryTarget: 'commonjs2',
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
