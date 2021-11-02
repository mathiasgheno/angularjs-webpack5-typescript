const config = require('./webpack.base.config');
const path = require('path');

config.mode = 'development';
config.entry = void(0);
config.output = {};
config.devtool = 'eval-source-map';

config.module.rules.splice(1, 0, {
  test: /\.ts$/,
  include: [
    path.resolve(__dirname, 'src')
  ],
  exclude: [
      /node_modules/,
      /\.spec\.ts$/
  ],
  loader: '@jsdevtools/coverage-istanbul-loader',
  options: {
    esModules: true // needed if you're using Babel
  },
  enforce: 'post'
});

config.optimization = {
  runtimeChunk: false,
  splitChunks: false
};

module.exports = config;
