const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const portfinder = require('portfinder');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = path.join(__dirname, './src');

// const openBrowser = new OpenBrowserPlugin({
//     url: `http://localhost:${port}`
// });

module.exports = function (env) {

    portfinder.basePort = (env && env.port) || 8080; // the default port to use

    return portfinder.getPortPromise().then(port => {

        const plugins = [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
                template: 'index.html',
                hash: true
            }),
            new CopyWebpackPlugin([{
                from: '../static/**/*',
                to: 'static',
            }])
        ];

        return {
            devtool: 'source-map',
            context: sourcePath,

            entry: [
                './index.tsx'
            ],

            output: {
                path: path.join(__dirname, 'build'),
                filename: 'bundle.js',
                publicPath: '/'
            },

            module: {
                rules: [{
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: [{
                                loader: 'babel-loader'
                            },
                            {
                                loader: 'awesome-typescript-loader'
                            }
                        ]
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        test: /\.ts$/,
                        exclude: /node_modules/,
                        enforce: 'pre',
                        loader: 'tslint-loader'
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

            devServer: {
                contentBase: './build',
                historyApiFallback: true,
                host: '0.0.0.0',
                disableHostCheck: true,
                port,
                compress: false,
                inline: true,
                hot: true
            }
        };
    });
};