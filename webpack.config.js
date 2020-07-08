const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"entry: "./app/entry", // string | object | array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    entry: "./src/index.js",
    output: {
        filename: '[name].[contenthash].js'
    }
}
