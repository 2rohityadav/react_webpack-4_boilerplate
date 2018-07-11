const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.join(__dirname, "/dist")
    path: path.resolve("dist")
    // filename: "bundle.js" // filename value is the name of the minified HTML that will be generated in the dist folder.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader", // load the style into the DOM
          use: "css-loader!sass-loader" // load the sass file & also have node-sass which converts scss -> css file
        })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html" // Used template key for looking HTML file.
    }),
    new ExtractTextPlugin("style.css")
  ],
  devtool: "cheap-module-eval-source-map",
  // using this devtool get the exeact location of error occured.
  devServer: {
    historyApiFallback: true
  }
};
