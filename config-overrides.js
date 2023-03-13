const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('@effortlessmotion/html-webpack-inline-source-plugin');
module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'export.html',
      template: __dirname + '/public/index.html',
      inlineSource: '.(js|css)$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ];
  return config;
};
