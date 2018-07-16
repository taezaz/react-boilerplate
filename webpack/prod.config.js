const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                node_env: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ],
});
