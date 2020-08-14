const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = (env) => {
  return {
  mode: 'production',
  entry: {
    main: './views/app.js'
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: '[name].[contenthash:8].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /vi/
    ),
    new Dotenv(),
    new LodashModuleReplacementPlugin,
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `
      <!DOCTYPE html>
      <html>      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Best bookstore</title>
        ${htmlWebpackPlugin.tags.headTags}
        <!-- Import Google Icon Font -->
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
    
        <!-- Compiled and minified CSS -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
    
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </head>
      
      <body>
        <div id="app" class="wrap"></div>
        ${htmlWebpackPlugin.tags.bodyTags}
      </body>
  
      </html>
      
      `
    }) // so that file hashes don't change unexpectedly
  ],
  module: {
    rules: [
        {
          loader: 'babel-loader', 
          test: /\.js$/, 
          exclude: /node_modules/
        },
        {
          test: /\.s?ass$/,
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: "file-loader?name=assets/[name].[ext]"
        }
      ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 51200,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    historyApiFallback: true,
    headers: {
      'X-Frame-Options': 'sameorigin'
    }
  }
}
};
