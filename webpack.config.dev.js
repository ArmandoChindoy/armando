const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// FROM ENVIOROMENT VARIABLES
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const ACCESS_PATH = process.env.ACCESS_PATH || '/';

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: ACCESS_PATH,
		filename: 'bundle.js',
	},
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@styles': path.resolve(__dirname, './src/assets/styles/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.(sass|scss)$/,
				// include: path.resolve(__dirname, './assets/css/'),
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|gif|jpe?g|svg)/,
				type: 'asset/resource',
				generator: {
					filename: './assets/img/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2)./,
				type: 'assets/fonts/resource',
				generator: {
					filename: 'assets/fonts/[contenthash][ext][query]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	//   optimization: {
	//     minimize: true,
	//     minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
	//   },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		// historyFallBack:true,
		compress: true,
		port: PORT,
		open: true,
	},
};
