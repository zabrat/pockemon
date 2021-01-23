const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            [
                                '@babel/plugin-proposal-decorators',
                                {
                                    legacy: true,
                                },
                            ],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-transform-regenerator',
                            '@babel/plugin-syntax-import-meta',
                            '@babel/plugin-proposal-json-strings',
                            '@babel/plugin-proposal-function-sent',
                            '@babel/plugin-proposal-export-namespace-from',
                            '@babel/plugin-proposal-numeric-separator',
                            '@babel/plugin-proposal-throw-expressions',
                            '@babel/plugin-proposal-export-default-from',
                            '@babel/plugin-proposal-logical-assignment-operators',
                            '@babel/plugin-proposal-optional-chaining',
                            [
                                '@babel/plugin-proposal-pipeline-operator',
                                {
                                    proposal: 'minimal',
                                },
                            ],
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-do-expressions',
                            '@babel/plugin-proposal-function-bind',
                            '@babel/plugin-transform-runtime',
                            [
                                'babel-plugin-styled-components',
                                {
                                    pure: true,
                                    fileName: false,
                                    displayName: false,
                                },
                            ],
                        ]
                    }
                }
            },
            { test: /\.(png|jpg|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: './theme/images'
                }
            },
            { test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                  outputPath: './theme/fonts'
                }
            },
            { test: /\.scss$/, use: [CssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.css$/, use: [CssExtractPlugin.loader, 'css-loader'] }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new CssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
    ]
}