const webpack = require('webpack');
const TslintPlugin = require('tslint-webpack-plugin');


module.exports = function (env) {



        const plugins = [
            new TslintPlugin({
                files: ['src/**/*.ts', 'src/**/*.tsx']
            })
        ];

        return {
            devtool: 'source-map',

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