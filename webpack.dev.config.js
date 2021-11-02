const config = require('./webpack.base.config');

config.mode = 'development';
config.devtool = 'cheap-module-source-map';
config.devServer = {
	host: '0.0.0.0',
	static: './dist',
	hot: true,
	watchFiles: [ 'src/**/*.less' ],
};

module.exports = config;
