const fs = require("fs");
const path = require("path");

const rootPath = fs.realpathSync(process.cwd());
module.exports = {
    rootPath,
    buildPath: path.resolve(rootPath, "./dist"),
    faviconPath: path.resolve(rootPath, "./template/favicon.ico"),
    htmlPath: path.resolve(rootPath, "./template/index.html")
};
