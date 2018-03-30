const webpack = require("webpack");
const config = require("./webpack.config.base");

const PREFIX = "xfeedback";

config.entry = {
    index: ["./examples"]
};

// Source map for development.
config.devtool = "cheap-module-eval-source-map";

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
                    localIdentName: `${PREFIX}-[name]-[local]`
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
    if (Array.isArray(config.entry[key]))
    {
        config.entry[key].unshift(
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://0.0.0.0:8080",
            "webpack/hot/only-dev-server"
        );
    }
}
config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
