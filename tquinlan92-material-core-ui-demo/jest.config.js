module.exports = {
    "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__src__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "moduleNameMapper": {
        "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
    }, "collectCoverageFrom": [
        "src/**/*.{ts,tsx}",
        "!**/*.d.ts"
    ],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
}