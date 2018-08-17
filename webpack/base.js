const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const publicDir = path.resolve(__dirname, "../dist/");
const srcDir = path.resolve(__dirname, "../src/");

const entryFile = srcDir + "/index.tsx";

module.exports = {
    // define where our source files come from and what the output looks like
    entry: entryFile,
    output: {
        filename: "bundle.[hash].js",
        path: publicDir
    },

    // files that should be resolved by webpack
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".scss"]
    },

    // the loaders
    module: {
        rules: [
            // LINTER
            {
                test: /\.tsx?$/,
                loader: "tslint-loader",
                enforce: "pre"
            },

            // REACT TYPESCRIPT COMPONENTS
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", "react"],
                            plugins: ["react-hot-loader/babel"]
                        }
                    },
                    {
                        loader: "awesome-typescript-loader"
                    }
                ],
                exclude: /node_modules/
            },

            // COMPONENT SASS STYLES
            {
                test: /\.(s*)css$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader", options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },

            // OTHER FILES LOADER
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './assets/images/',
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2|json|xml)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './fonts/',
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(json|xml)$/,
                loader: 'file-loader',
                query: {
                    outputPath: './data/',
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: [{ loader: 'csv-loader' }]
            },
        ]
    },

    // plugins
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV === "development"
        }),
        // Copy image files to the build folder.
        new CopyWebpackPlugin(
            [
                { from: './src/assets', to: '../' + "dist/assets", ignore: ['*.ts', '*.tsx', '*.html', '*.scss', '*.css'] }
            ]
        ),
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
