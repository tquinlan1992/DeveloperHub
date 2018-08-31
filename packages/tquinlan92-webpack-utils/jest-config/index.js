module.exports = {
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "./src/.*test.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "moduleNameMapper": {
        "\\.(css|less)$": "./assetsTransformer.js"
    }, "collectCoverageFrom": [
        "src/**/*.{ts,tsx}",
        "!**/*.d.ts"
    ],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "globals": {
        "window": true
    },
    "testURL": "http://localhost"
};
