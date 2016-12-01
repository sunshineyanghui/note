//开发时的配置文件,主要服务于 webpack-dev-sever
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: "/build/"
  },
  devServer: {
    // publicPath: "/build/",
    stats: { colors: true },
    port: 4000,
    inline: true,
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval',
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
  loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.css/,loader: 'style!css'},
      {test: /\.(jpe?g|png)$/,loader: 'file-loader'}

    ]
  }

};
