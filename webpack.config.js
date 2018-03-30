const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('./server/webpack-dev-proxy');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client');
  }

  return sources;
}

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './sample/index.html',
    inject: 'body',
  }),
];

const devPlugins = [
  new webpack.NoEmitOnErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

/* eslint max-len: "off" */
module.exports = {
  entry: {
    app: getEntrySources(['./sample/index.js']),
    vendor: [
      'react',
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'source-map',
  plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: proxy(),
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$$/, enforce: 'pre', loader: 'source-map-loader' },
      { test: /\.(js|jsx)$$/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-wof' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
    ],
  },
};
