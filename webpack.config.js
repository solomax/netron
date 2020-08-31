const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './source/index.js',
  devtool: '',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "source", "index.html")
    })
  ],
  output: {
    filename: 'netron.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

