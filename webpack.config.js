const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const tsRule = {
	test: /\.ts(x?)$/,
	exclude: /node_modules/,
	use: 'ts-loader',
};

const plugins = [
	//looks for template in dir
	//compiles with the filename designated
	new HtmlWebpackPlugin({
		template: 'src/popup-page/popup.html',
		filename: 'popup.html',
		chunks: ['popup'],
	}),
	//move everything from the public dir to root dir
	new CopyWebpackPlugin({
		patterns: [{ from: 'public', to: '.' }],
	}),
	//clears dist folder every time we compile
	new CleanWebpackPlugin(),
];

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	entry: {
		popup: './src/popup-page/popup.tsx',
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, 'dist'),
	},
	module: {
		rules: [tsRule],
	},
	plugins,
};
