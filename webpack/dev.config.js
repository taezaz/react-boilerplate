const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',

    devServer: {
        inline: true,
        contentBase: 'app',
        port: '3001',
    },
});
