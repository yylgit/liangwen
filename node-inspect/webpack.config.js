const polyfill = []

module.exports = {
  entry: polyfill.concat(['./entry.js']),
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'entry.js',
    library: 'entry',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
  },
  optimization: {
    minimize: true
  }
}

