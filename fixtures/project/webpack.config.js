module.exports = {
  entry: './index.js',

  output: {
    publicPath: 'http://cdn.com/assets/[git-revision-version]/[git-revision-hash]',
    filename: '[name]-[git-revision-version].js'
  },

  module: {
    loaders: [
      {
        test: /\.(txt)$/,
        loader: 'file?name=[name][git-revision-version].[ext]'
      }
    ]
  }
}
