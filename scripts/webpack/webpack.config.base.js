const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname, "../../");
const BUILD_PATH = path.join(ROOT_PATH, "dist");

module.exports = {
    context: ROOT_PATH,
    output: {
        path: BUILD_PATH,
        filename: "[name].js",
        publicPath: "/assets/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
        // modules: ["./", "node_modules"] // see https://github.com/webpack-contrib/css-loader/issues/74.
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: { cacheDirectory: true }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            mimetype: "application/font-woff",
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 8192,
                            mimetype: "application/font-woff",
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(BUILD_PATH, {
            root: ROOT_PATH,
            verbose: false
        })
    ],
    stats: {
        children: false,
        modules: false
    }
};
