module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './js/app'
  },
  output: {
    path: __dirname + '/dist/js', // 出力先のパス
    filename: '[name].js' // 出力ファイル名
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
  }
}
