const fs = require("fs");
const path = require("path");

const rootPath = fs.realpathSync(process.cwd());
module.exports = {
    devProtocol: "http",
    devHost: process.env.HOST || "0.0.0.0",
    devPort: process.env.PORT || 8080,

    rootPath,
    buildPath: path.resolve(rootPath, "./dist"),
    faviconPath: path.resolve(rootPath, "./template/favicon.ico"),
    htmlPath: path.resolve(rootPath, "./template/index.html")
};
