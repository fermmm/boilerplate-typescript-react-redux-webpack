const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const OpnWebpackPlugin = require('opn-webpack-plugin');

const devServerPort = 3000;

module.exports = merge(baseConfig, {
    mode: "development",

    // source-map configuration
    devtool: "source-map",
    devServer: {
        contentBase: "../dist/",
        port: devServerPort,
        host: '0.0.0.0',
        hot: true,

        // stats
        stats: {
            hash: false,
            version: false,
            chunks: false,
            modules: false,
            children: false,
            colors: true
        }
    },
    plugins: [
        new OpnWebpackPlugin({target: 'http://localhost:' + devServerPort, options: {}})
    ]
});
