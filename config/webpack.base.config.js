const path = require('path')
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'zimarked.min.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'ts-loader',
      }]
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      exclude: /node_modules/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'img/[sha512:hash:base64:7].[ext]'
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.scss'],
  }
}