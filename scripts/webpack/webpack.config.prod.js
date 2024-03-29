const { getPackageJSON } = require("../utils/package");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = require("./webpack.config.base");
config.mode = "production";

// Use `hidden-source-map`, so that the browser will not load it automatically.
// You can still load it manually.
config.devtool = "hidden-source-map";

config.externals = {
    "classnames": "classnames",
    "history": "History",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM"
};

config.optimization = {
    minimizer: [
        new TerserPlugin({
            extractComments: false,
            terserOptions: {
                format: { comments: false }
            }
        }),
        new CssMinimizerPlugin()
    ]
};

config.module.rules.push(
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        include: /node_modules/
    },
    {
        test: /\.less$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false
                }
            },
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: `${getPackageJSON().name}-[sha1:hash:hex:5]`
                    }
                }
            },
            "less-loader"
        ],
        exclude: /node_modules/
    }
);

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].chunk.css"
    })
);

if (process.env.BUILD_ANALYZE === "true")
{
    config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
