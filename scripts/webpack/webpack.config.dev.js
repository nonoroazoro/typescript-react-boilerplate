const webpack = require("webpack");
const config = require("./webpack.config.base");

config.mode = "development";

config.module.rules.push(
    {
        enforce: "pre",
        test: /\.tsx?$/,
        use: ["tslint-loader"],
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

// Hot module replacement, see http://gaearon.github.io/react-hot-loader/getstarted/
// for (const key of Object.keys(config.entry))
// {
//     config.entry[key].unshift(
//         "webpack-dev-server/client?http://0.0.0.0:8080",
//         "webpack/hot/only-dev-server"
//     );
// }
// config.plugins.push(
//     new webpack.HotModuleReplacementPlugin()
// );

module.exports = config;
