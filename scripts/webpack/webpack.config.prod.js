const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { getPackageName } = require("../utils/package");

const packageName = getPackageName();
const config = require("./webpack.config.base");
config.mode = "production";
config.entry = {
    [`${packageName}.min`]: ["./src"]
};
config.optimization = {
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin()
    ]
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
                    namedExport: true,
                    camelCase: true,
                    localIdentName: `${packageName}-[path]-[local]`,
                    modules: true,
                    sourceMap: false
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new MiniCssExtractPlugin({ filename: "[name].css", chunkFilename: "[id].css" })
);

module.exports = config;
