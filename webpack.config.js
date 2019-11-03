const HtmlWebpackPlugin = require('html-webpack-plugin');
// Webpack uses this to work with directories
const path = require('path');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',
  devtool: "inline-source-map",
  
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },

  module: {
    rules: [
        // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ]
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
  ],

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};

