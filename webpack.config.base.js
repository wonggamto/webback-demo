const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                use:['file-loader']
            },
            {
                test: /\.styl$/,
                loader: ['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader','less-loader'], // compiles Less to CSS
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation:require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
}

