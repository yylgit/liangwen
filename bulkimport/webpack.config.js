const polyfill = []

const umd = {
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: 'SDK',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
}


module.exports = [umd]
