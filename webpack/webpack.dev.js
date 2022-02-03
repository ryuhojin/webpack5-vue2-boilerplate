/**
 * @name webpack.dev.js
 * @description 개발 서버 기준 웹팩 설정
 * @author 류호진
 */
/** COMMON WEBPACK */
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        historyApiFallback: true,
    },
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    "postcss-loader"
                ]
            }
        ]
    },
})