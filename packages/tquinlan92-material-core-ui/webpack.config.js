const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = function (env) {



        const plugins = [
        ];

        return {
            devtool: 'source-map',
            externals: [nodeExternals()],
            entry: [
                './src/index.ts'
            ],

            output: {
                filename: 'index.js',
                libraryTarget: "commonjs2"
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
                }, {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                }]
            },

            resolve: {
                extensions: ['.ts', '.tsx']
            },

            plugins,

            stats: {
                colors: {
                    green: '\u001b[32m',
                }
            }
        };
};