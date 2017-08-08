const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  context: __dirname + '/src',
  entry: {
    'main': './route'
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-3']
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css',  allChunks: true })
  ],
  devtool: 'inline-source-map' // ソースのファイル名と行数を表示するよう設定
}
