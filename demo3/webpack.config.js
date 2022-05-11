const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle[hash].js', //[hash] crée un nom unique pour chaque version du fichier
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html' //index.html servira de template
  })],
  mode: 'development'
};