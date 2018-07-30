const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const portfinder = require('portfinder');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = function (sourcePath) {

        return function(env) {
            const mode = env ? env : development;
            const plugins = [
                new webpack.NamedModulesPlugin(),
                new webpack.HotModuleReplacementPlugin(), 
                new HtmlWebpackPlugin({
                    template: 'index.html',
                    hash: true
                }),
                new CopyWebpackPlugin([{
                    from: '../static/**/*',
                    to: 'static',
                }]),
                new FriendlyErrorsWebpackPlugin()
            ];

            return {
                devtool: 'source-map',
                context: sourcePath,

                entry: [
                    './index.tsx',
                    'webpack/hot/dev-server',
                    'webpack-dev-server/client?'
                ],

                output: {
                    filename: 'bundle.js',
                    publicPath: '/'
                },

                module: {
                    rules: [{
                            test: /\.(ts|tsx)$/,
                            exclude: /node_modules/,
                            use: [
                                {
                                    loader: require.resolve('awesome-typescript-loader'),
                                    options: {
                                        useBabel: true,
                                    }
                                }
                            ]
                        },
                        {
                            test: /\.css$/,
                            use: [require.resolve('style-loader'), require.resolve('css-loader')]
                        },
                        {
                            test: /\.ts$/,
                            exclude: /node_modules/,
                            enforce: 'pre',
                            loader: require.resolve('tslint-loader')
                        }
                    ]
                },

                resolve: {
                    extensions: ['.ts', '.tsx', '.js']
                },
                mode,
                plugins
            };
    };
}