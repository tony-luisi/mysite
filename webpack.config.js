var path = require("path")
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
