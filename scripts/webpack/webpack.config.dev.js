const webpack = require("webpack");

const config = require("./webpack.config.base");
config.mode = "development";
config.devtool = "cheap-module-eval-source-map";
config.entry = {
    index: ["./src"]
};

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
                    namedExport: true,
                    camelCase: true,
                    localIdentName: "[path]-[local]",
                    modules: true,
                    sourceMap: false
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

// Hot module replacement, see https://github.com/gaearon/react-hot-loader#getting-started
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
