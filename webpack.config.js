const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // "production" | "development" | "none"entry: "./app/entry", // string | object | array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    devtool: 'inline-source-map',
    devServer: {
        contentBase:'./dist',
    },
    entry: "./src/index.js",
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}

