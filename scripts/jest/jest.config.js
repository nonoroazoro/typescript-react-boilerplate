module.exports = {
    "rootDir": "../../",
    "coverageDirectory": "<rootDir>/@coverage",
    "globals": {
        "ts-jest": {
            "tsConfig": "tsconfig.test.json"
        }
    },
    "moduleFileExtensions": ["js", "ts", "tsx"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/scripts/jest/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "setupFiles": ["<rootDir>/scripts/jest/jest.setup.js"],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "testRegex": "/__tests__/.+\\.(test|spec)\\.tsx?$",
    "transform": { "^.+\\.tsx?$": "ts-jest" },
    "verbose": true
};
