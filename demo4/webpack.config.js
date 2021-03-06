const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][hash].js'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}