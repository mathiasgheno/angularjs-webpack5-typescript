const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	entry: {
		app: './src/app.ts'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},

	resolve: {
		extensions: [ '.ts', '.js', '.json' ],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			'src/'
		]
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ng-annotate-loader',
						options: {
							ngAnnotate: 'ng-annotate-patched',
							sourcemap: false
						},
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json'
						}
					}
				],
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				]
			},
			{
				test: /\.html/,
				type: 'asset/resource',
				generator: {
					filename: 'static/[name].[hash][ext][query]'
				},
				exclude: [
					/index\.html/
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			scriptLoading: 'blocking'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:4].css',
			chunkFilename: '[id].[contenthash:4].css'
		})
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};

module.exports = config;
