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
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/node_modules/tquinlan1992-webpack-util/src/jest/assetsTransformer.js",
        "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
    }, "collectCoverageFrom": [
        "src/**/*.{ts,tsx}"
    ]
}