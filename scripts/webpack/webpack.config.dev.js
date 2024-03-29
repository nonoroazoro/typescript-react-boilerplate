const config = require("./webpack.config.base");

config.mode = "development";
config.devtool = "eval-cheap-module-source-map";

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
            {
                loader: "style-loader",
                options: {
                    esModule: false
                }
            },
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: "[name]-[local]"
                    }
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

module.exports = config;
