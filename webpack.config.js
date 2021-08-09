var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: [
           './react/index',
        ],

  output: {
    path: path.resolve('/home/ubuntu/django/travel-monk/tourism_project/static/bundles'),
      filename: "[name]-[hash].js",
      publicPath: '/static/bundles/', 
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
	new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  module: {
    rules: [


        { test: /\.js$/, use: 'babel-loader',exclude: /node_modules/, },
        { test: /\.jsx$/, use: 'babel-loader',exclude: /node_modules/, },
        { test: /\.css$/,  use: ['style-loader', 'css-loader'], },
        { test: /\.(svg|png|jpg|jpeg|gif)$/, use: 'url-loader',},


    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }

};