const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge (common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
        }),
    ], 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
              }
        ]
    }
});
