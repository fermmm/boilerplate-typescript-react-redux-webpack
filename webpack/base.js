const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const publicDir = path.resolve(__dirname, "../dist/");
const srcDir = path.resolve(__dirname, "../src/");

const entryFile = srcDir + "/index.tsx";

module.exports = {
    // Where our source files come from and what the output looks like
    entry: entryFile,
    output: {
        filename: "bundle.[hash].js",
        path: publicDir
    },

    // Files that should be resolved by webpack
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".scss"]
    },

    // Loaders
    module: {
        rules: [
            // "Linter in the console" loader
            {
                test: /\.tsx?$/,
                loader: "tslint-loader",
                enforce: "pre"
            },

            // TypeScript and tsx loader
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: ["react-hot-loader/babel"]
                        }
                    },
                    {
                        loader: "awesome-typescript-loader"
                    }
                ],
                exclude: /node_modules/
            },

            // Markup loader
            {
                test: /\.(s*)css$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader", options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:2]',
                            camelCase: true,
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },

            // Other files loaders
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './images/',
                    name: '[path][name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2|json|xml)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './fonts/',
                    name: '[path][name].[ext]?[hash]'
                }
            },
            {
                test: /\.(json|xml)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './data/',
                    name: '[path][name].[ext]?[hash]'
                }
            },
            {
                test: /\.(mp3|mp4|flac|ogg)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './audio/',
                    name: '[path][name].[ext]?[hash]'
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: [{ loader: 'csv-loader' }]
            },
        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV === "development"
        }),
        // Copy into the build folder all the media files and other files that are not imported anywhere, all files 
        // should be avaiable in the build.
        new CopyWebpackPlugin(
            [
                { from: './src/assets', to: '../' + "dist/assets", ignore: ['*.ts', '*.tsx', '*.html', '*.scss', '*.css'] }
            ]
        ),
        // With this plugin you can add environment variables to the .env file and call them like this: process.env.MY_VARIABLE
        new Dotenv(),
    ],

    // stats
    stats: {
        hash: false,
        version: false,
        chunks: false,
        modules: false,
        children: false,
        colors: true
    }
};
