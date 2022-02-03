/**
 * @name webpack.prod.js
 * @description 운영 서버 기준 웹팩 설정
 * @author 류호진
 */
/** COMMON WEBPACK */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/**OPTTIMIZE WEBPACK PLUG-IN */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map", //'source-map',
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
