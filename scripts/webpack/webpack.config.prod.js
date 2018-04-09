const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack.config.base");

config.mode = "production";
config.output.filename = "[name].[chunkhash:8].js";
config.output.chunkFilename = "[name].[chunkhash:8].chunk.js";

config.module.rules.push(
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        include: /node_modules/
    },
    {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    sourceMap: true,
                    localIdentName: "[name]-[local]__[hash:base64:8]"
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new MiniCssExtractPlugin({ filename: "res/[name].[contenthash:8].css" })
);

module.exports = config;
