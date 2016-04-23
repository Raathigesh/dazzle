const path = require('path');
const webpack = require('webpack');
const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

const devPlugins = [
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
  entry: {
    lib: ['./lib/index.js'],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    library: 'dazzle',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },

  devtool: 'source-map',
  plugins: plugins,

  module: {
    preLoaders: [
      { test: /\.(js|jsx)$$/, loader: 'source-map-loader' },
      { test: /\.(js|jsx)$$/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
    ],
  },
  node: {
    global: false,
  },
};
