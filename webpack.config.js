module.exports = {
  context: __dirname + '/src',
  entry: {
    'app': './js/app'
  },
  output: {
    path: __dirname + '/dist/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:{
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  },
  devtool: 'inline-source-map' // // ソースのファイル名と行数を表示するよう設定
}
