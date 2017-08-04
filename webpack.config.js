const path = require('path')

module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './js/app'
  },
  output: {
    path: __dirname + '/dist/js', // 出力先のパス
    filename: '[name].js' // 出力ファイル名
  },
  // Configuration for dev server
  devServer: {
    contentBase: path.resolve(__dirname, '../pages'),
    port: 3000
  },
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/, 
      query: {
        presets: ['react', 'es2015']
      },
      loader: 'babel-loader'
    }]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
}
