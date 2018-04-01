const webpack = require("webpack");
const config = require("./webpack.config.base");

config.mode = "development";

config.module.rules.push(
    {
        enforce: "pre",
        test: /\.jsx?$/,
        use: ["eslint-loader"],
        exclude: /node_modules/
    },
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
                    modules: true,
                    sourceMap: true,
                    localIdentName: "[name]-[local]"
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

// Hot module replacement.
for (const key of Object.keys(config.entry))
{
    config.entry[key].unshift(
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?quiet=true"
    );
}
config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
