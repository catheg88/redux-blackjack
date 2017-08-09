module.exports = {
  entry: '/Users/atheg/Desktop/redux_workshop/redux_blackjack_copy/frontend/entry.jsx',
  output: {
    path: '/Users/atheg/Desktop/redux_workshop/redux_blackjack_copy/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx' ]
  }
};
