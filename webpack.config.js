var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  context: __dirname + '/src',
  devtool: debug ? "inline-sourcemap" : null,
  entry: './client.js',
  output: { 
    path: __dirname, 
    filename: 'client.min.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        //loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react','stage-0'],
          plugins:['react-html-attrs','transform-class-properties','transform-decorators-legacy']
        }
      },
       {
        test: /.scss?$/,
        loaders: ["style", "css", "sass"],
      },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
    ]
  },
  plugins:debug?[]:[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false})
  ]
};