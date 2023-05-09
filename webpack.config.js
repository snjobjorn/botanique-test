const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    analytics: './src/scripts/analytics.js',
    error: './src/scripts/error.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './public'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'main.html',
        template: './src/pages/main.html',
        chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        filename: 'analytics.html',
        template: './src/pages/analytics.html',
        chunks: ['analytics']
    }),
    new HtmlWebpackPlugin({
        filename: 'error.html',
        template: './src/pages/error.html',
        chunks: ['error']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/images'),
            to:   path.resolve(__dirname, 'public/images')
          }
        ]
      })
  ]
}