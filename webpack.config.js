const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
// to fix 'process is not defined error'
const webpack = require('webpack');

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
	// fix "process is not defined" error:
	// (do "npm install process" before running the build)
	new webpack.ProvidePlugin({
		process: 'process/browser',
		Buffer: ['buffer', 'Buffer'],
	}),
];

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	resolve: {
		fallback: {
			path: require.resolve('path-browserify'),
			util: require.resolve('util/'),
			fs: false,
			stream: require.resolve('stream-browserify'),
			constants: require.resolve('constants-browserify'),
			assert: require.resolve('assert/'),
			url: require.resolve('url/'),
			net: false,
			tls: false,
			https: require.resolve('https-browserify'),
			http: require.resolve('stream-http'),
			os: require.resolve('os-browserify/browser'),
			zlib: require.resolve('browserify-zlib'),
			child_process: false,
		},
	},
	entry: {
		popup: './src/popup-page/popup.tsx',
		contentscript: './src/contentscript.tsx',
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
