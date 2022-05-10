const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],

    module: {

        rules: [

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],

            }
        ]
    },

    devServer: {

        static: {
            directory: path.join(__dirname, 'build'),
        },

        compress: true,
        historyApiFallback: true,
        port: 9010,
    },

    mode: process.env.MODE === 'development' ? 'development' : 'production',
    devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : 'source-map'
};