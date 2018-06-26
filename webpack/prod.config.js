const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        snowfall: path.resolve(ROOT_PATH, '..', 'src', 'index.js'),
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(ROOT_PATH, '..', 'dist'),
        filename: '[name].js',
        library: 'snow-fall',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            include: path.resolve(ROOT_PATH, '..', 'src', 'js'),
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            options: {
                'limit': 40000,
            }
        }, ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(path.resolve(ROOT_PATH, '..', 'dist'), {
            verbose: true,
            dry: false
        }),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    performance: {
        hints: false
    }
};

module.exports = config;