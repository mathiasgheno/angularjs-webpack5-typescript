const path = require('path');

const config = require('./webpack.base.config');

const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

config.mode = 'production';
config.output.filename = '[name].[hash].js';
config.output.chunkFilename = '[name].[hash].js';
config.devtool = 'hidden-source-map';

config.module.rules[0].use[0].options.sourcemap = true;
config.optimization.minimize = true;
config.optimization.minimizer = [ new TerserPlugin() ];
config.plugins.push(new ESLintPlugin({
  extensions: ['ts', 'js'],
  files: [
    `${path.resolve(__dirname, 'src')}/**/*.ts`,
    `${path.resolve(__dirname, 'src')}/**/*.js`,
    `${path.resolve(__dirname, 'test')}/**/*.js`,
    `${path.resolve(__dirname, 'test')}/**/*.js`
  ]
}));

module.exports = config;
