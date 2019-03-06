const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { getPackageName } = require("../utils/package");
const config = require("./webpack.config.base");
const packageName = getPackageName();

config.mode = "production";
config.devtool = "hidden-source-map";
config.entry = {
    [`${packageName}.min`]: ["./src"]
};

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
                    localIdentName: `${packageName}-[path]-[local]`,
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
    new MiniCssExtractPlugin({ filename: "[name].css" })
);

module.exports = config;
