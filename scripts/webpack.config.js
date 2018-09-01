const path = require('path');
const webpack = require('webpack');
// const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const Visualizer = require('webpack-visualizer-plugin')
// const conf = require('./conf')
// const appEntrys = require('./app-entry')
module.exports = function (env, argv) {
    const isProduction = env && env.production;
    let config = {
        entry: {
            app: path.resolve(__dirname, '../src/app.jsx')
        },
        // devtool: !isProduction ? 'cheap-source-map' : '',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, '../public'),
            filename: `js/[name]${isProduction ? '-[contenthash:8]' : ''}.js`,
            chunkFilename: `js/[name]${isProduction ? '-[contenthash:8]' : ''}.js`
        },
        // externals: {
        //     'react': 'React',
        //     'react-dom': 'ReactDOM'
        // },
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        module: {
            rules: [{
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/
                ],
                options: {
                    // plugins: [["import", { libraryName: "antd", style: true}]]
                }
            },{
                test: /\.(eot|png|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
                filename: 'index.html'
            }),
            new Visualizer()
        ]
    }
    if (isProduction) {
        config.mode = 'production';
        config.optimization = {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    // sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
        config.module.rules.push({
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    //   publicPath: '../'
                }
            }, 'css-loader', 'postcss-loader']
        })
        config.module.rules.push({
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader',]
        })
        config.plugins.push(
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].[contenthash:8].css",
                chunkFilename: "[id].[contenthash:8].css"
            })
        )
    }else{
        config.mode = 'development'
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        })
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',]
        })
        // config.plugins.push()
    }
    return config;
}