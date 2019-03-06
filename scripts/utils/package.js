const path = require("path");

function getPackageFolder()
{
    return process.cwd();
}

function getPackageName()
{
    const filepath = path.resolve(getPackageFolder(), "package.json");
    return require(filepath).name.replace(/^@ali\//g, "");
}

module.exports = {
    getPackageFolder,
    getPackageName
}
