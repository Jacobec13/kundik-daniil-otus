const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        port: '8090'
    },
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, './index.html')})]
}
