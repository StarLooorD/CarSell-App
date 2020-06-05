module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: {
         loader: 'file-loader',
         loader: 'img-loader',
         loader: 'url-loader?limit=8192'
       }
      },
    ]
  }
}