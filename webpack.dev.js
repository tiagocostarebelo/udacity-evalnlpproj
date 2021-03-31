const path = require("path");
const config = require("./webpack.config");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: "development",
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});
