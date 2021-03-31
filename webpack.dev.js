const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
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
