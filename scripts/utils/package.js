const path = require("path");
const env = require("../env.config");

function getPackageJSON()
{
    return require(path.resolve(env.rootPath, "package.json"));
}

module.exports = {
    getPackageJSON
};
