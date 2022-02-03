/**
 * 
 * @name webpack.common.js
 * @description 공통 기준 웹팩 설정
 * @author 류호진
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    target: ['web', 'es5'],
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/')
        },
        extensions: [".js", ".vue", ".json", ".css"]
    }
}

