const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");


module.exports = (baseConfig, env, config) => {
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  },
  {
    test: /\.tsx?$/,
    include: [
      path.resolve(__dirname, "../stories")
    ],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ]
  });
    baseConfig.plugins.push(new TSDocgenPlugin()); // optional
  baseConfig.resolve.extensions.push(".ts", ".tsx");
  return baseConfig;
};