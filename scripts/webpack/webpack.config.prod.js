const webpack = require("webpack");
const config = require("./webpack.config.base");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PREFIX = "xfeedback";
const LIBRARY_NAME = "xfeedback-drawboard";

config.entry = {
    [LIBRARY_NAME]: ["./src"]
};

// Source map for production.
config.devtool = "source-map";

config.output.library = LIBRARY_NAME;
config.output.libraryTarget = "umd";

config.externals = {
    react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
    },
    "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
    }
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
                loader: "css-loader",
                options: {
                    modules: true,
                    sourceMap: true,
                    localIdentName: `${PREFIX}-[name]-[local]__[hash:base64:5]`
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new CopyWebpackPlugin([
        "./src/xfeedback-drawboard.d.ts",
        "./src/style/mixins.less",
        "./src/style/variables.less"
    ]),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("production") }
    }),
    new webpack.optimize.UglifyJsPlugin({
        parallel: true,
        sourceMap: true
    })
);

module.exports = config;
