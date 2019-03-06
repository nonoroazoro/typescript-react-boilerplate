const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getPackageName } = require("../utils/package");
const config = require("./webpack.config.base");

config.mode = "production";
config.devtool = "hidden-source-map";
config.output.filename = "[name].[chunkhash:8].js";
config.output.chunkFilename = "[name].[chunkhash:8].js";

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
                loader: "typings-for-css-modules-loader",
                options: {
                    camelCase: true,
                    localIdentName: `${getPackageName()}-[path]-[local]`,
                    modules: true,
                    namedExport: true,
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash:8].css" })
);

module.exports = config;
