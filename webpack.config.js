const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "eval-source-map",
  mode: "development",
  watch: true,
  watchOptions: {
    poll: 500,
    aggregateTimeout: 200,
  },
  devServer: {
    compress: false,
    port: 1234,
    hot: true,
    publicPath: '/dist',
  },
};