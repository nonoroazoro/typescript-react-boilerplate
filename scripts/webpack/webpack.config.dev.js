const webpack = require("webpack");

const config = require("./webpack.config.base");

config.mode = "development";

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
                loader: "typings-for-css-modules-loader",
                options: {
                    camelCase: true,
                    localIdentName: "[name]-[local]",
                    modules: true,
                    namedExport: true,
                    sourceMap: true
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

// Hot module replacement, see https://github.com/gaearon/react-hot-loader#getting-started
for (const key of Object.keys(config.entry))
{
    config.entry[key].unshift(
        "webpack-dev-server/client?http://0.0.0.0:8080",
        "webpack/hot/only-dev-server"
    );
}
config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
