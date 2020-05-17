const merge = require('webpack-merge');
const baseConfig = require('./base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
   mode: 'production',
   plugins: [
      new CleanWebpackPlugin({
         cleanAfterEveryBuildPatterns: ['dist'],
      }),
   ],
});
