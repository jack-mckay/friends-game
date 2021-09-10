const path = require('path');

module.exports = (env, options) => {
	const isProduction = options.mode === 'production';
	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}]
		},
		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
		devServer: {
			static: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	}
};