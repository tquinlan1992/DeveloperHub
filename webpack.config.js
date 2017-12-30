const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const TslintPlugin = require('tslint-webpack-plugin');
const portfinder = require('portfinder');

const sourcePath = path.join(__dirname, './src');

module.exports = function (env) {

    portfinder.basePort = (env && env.port) || 8080; // the default port to use

    return portfinder.getPortPromise().then(port => {
        const nodeEnv = env && env.prod ? 'production' : 'development';
        const isProd = nodeEnv === 'production';

        const plugins = [
            new webpack.EnvironmentPlugin({
                NODE_ENV: nodeEnv
            }),
            new webpack.NamedModulesPlugin()
        ];

        if (isProd) {
            plugins.push(
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                        screw_ie8: true
                    }
                })
            );
        } else {
            plugins.push(
                new webpack.HotModuleReplacementPlugin()
            );
        }

        plugins.push(new HtmlWebpackPlugin({
            template: 'index.html',
            hash: true
        }), new OpenBrowserPlugin({
            url: `http://localhost:${port}`
        }), new TslintPlugin({
            files: ['src/**/*.ts', 'src/**/*.tsx']
        }));

        return {
            devtool: isProd ? 'source-map' : 'cheap-module-source-map',
            context: sourcePath,

            entry: [
                './index.tsx'
            ],

            output: {
                path: path.join(__dirname, 'build'),
                filename: 'bundle.js',
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
                }]
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
                compress: isProd,
                inline: !isProd,
                hot: !isProd,
                stats: {
                    assets: true,
                    children: false,
                    chunks: false,
                    hash: false,
                    modules: false,
                    publicPath: false,
                    timings: true,
                    version: false,
                    warnings: true,
                    colors: {
                        green: '\u001b[32m'
                    }
                },
            }
        };
    })
};