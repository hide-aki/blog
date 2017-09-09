module.exports = [
  {
    test: /\.js$/,
    loader: 'babel-loader'
  },
  {
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
]
