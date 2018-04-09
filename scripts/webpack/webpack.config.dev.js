const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./webpack.config.base");

config.mode = "development";

config.module.rules.push(
    {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: "[name]-[local]"
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new MiniCssExtractPlugin({ filename: "res/[name].css" })
);

// Hot module replacement, see http://gaearon.github.io/react-hot-loader/getstarted/
for (const key of Object.keys(config.entry))
{
    config.entry[key].unshift(
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://0.0.0.0:8080",
        "webpack/hot/only-dev-server"
    );
}
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
);

module.exports = config;
