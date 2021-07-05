const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DontenvWebpack = require("dotenv-webpack");

// FROM ENVIOROMENT VARIABLES
require("dotenv").config();
const ACCESS_PATH = process.env.ACCESS_PATH || "/";

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    publicPath: ACCESS_PATH,
    assetModuleFilename: "assets/",
  },
  resolve: {
    extensions: [".js", "jsx"],
    alias:{
        '@components':path.resolve(__dirname,'./src/components/'),
        '@styles':path.resolve(__dirname,'./src/assets/styles/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[contenthash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2)./,
        type: "assets/fonts/resource",
        generator: {
          filename: "assets/fonts/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name][contenthash].css",
    }),
    new DontenvWebpack(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
};
