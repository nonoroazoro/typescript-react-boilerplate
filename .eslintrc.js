const { isProd } = require("./scripts/env.config");

const config = {
    "extends": [
        "eslint-config-zoro"
    ],
    "env": {
        "jest": true
    },
    "parserOptions": {
        "project": "./tsconfig.eslint.json"
    }
};

if (!isProd)
{
    config.rules = {
        "no-console": "off",
        "@typescript-eslint/no-unused-vars": "off"
    };
}

module.exports = config;
