const webpack = require("webpack");

const config = require("./webpack.config.base");
config.mode = "development";
config.devtool = "cheap-module-eval-source-map";

config.module.rules.push(
    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        include: /node_modules/
    },
    {
        test: /\.less$/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    camelCase: true,
                    localIdentName: "[name]-[local]",
                    modules: true
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

// 1. HMR: Use patched react-dom to support React 16.6+ features in RHL.
config.resolve.alias = {
    "react-dom": "@hot-loader/react-dom"
};

// 2. HMR: Add entries and plugins.
Object.keys(config.entry).forEach((key) =>
{
    config.entry[key].unshift(
        "webpack-dev-server/client?http://0.0.0.0:8080",
        "webpack/hot/only-dev-server"
    );
});
config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
