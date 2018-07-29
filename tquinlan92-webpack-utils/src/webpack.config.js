const webpack = require('webpack');
const path = require('path');
const portfinder = require('portfinder');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


module.exports = function(sourcePath) {
    console.log('sourcePath', sourcePath);
    return function (env) { // the default port to use
        const mode = env ? env : development;
        const plugins = [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new FriendlyErrorsWebpackPlugin()
        ];

        return {
                devtool: 'source-map',
                context: sourcePath,

                entry: [
                    './index.ts'
                ],

                output: {
                    filename: 'index.js',
                    libraryTarget: "commonjs2"
                },

                externals: [nodeExternals()],

                module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            exclude: /node_modules/,
                            enforce: 'pre',
                            loader: require.resolve('tslint-loader')
                        },
                        {
                            test: /\.(ts|tsx)$/,
                            exclude: /node_modules/,
                            use: [{
                                    loader: require.resolve('babel-loader')
                                },
                                {
                                    loader: require.resolve('awesome-typescript-loader')
                                }
                            ]
                        }
                    ]
                },

                resolve: {
                    extensions: ['.ts', '.tsx', '.js']
                },

                plugins,

                stats: {
                    colors: {
                        green: '\u001b[32m',
                    }
                },
                mode
            };
    }
};