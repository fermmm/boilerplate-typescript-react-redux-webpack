const merge = require('webpack-merge');
const path = require("path");
const baseConfig = require('./base.js');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const distDir = path.resolve(__dirname, "../dist/");

module.exports = merge(baseConfig, {
    mode: "production",
    plugins: [new CleanWebpackPlugin([distDir], { root: process.cwd() })]
});
