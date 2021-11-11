/* eslint-disable @typescript-eslint/no-var-requires */
// test: /\.(sa|sc|c)ss$/i,

/**
 * @see https://stackoverflow.com/questions/62023604/where-to-find-or-how-to-set-htmlwebpackplugin-options-title-in-project-created-w
 */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // Примечание: формат конфигурации отличается между Vue CLI v4 и v3
        // Для пользователей Vue CLI v3, обратитесь к документации css-loader v1
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          // localIdentName: '[path][name]__[local]--[hash:base64:5]'
          localIdentName: '[local]--[hash:base36:5]'
          /**
           * customize hash!!!!
           * @see https://www.npmjs.com/package/generic-names
           * @see https://stackoverflow.com/questions/67746387/different-hashes-between-css-loader-and-babel-plugin-react-css-modules
           */
        },
        localsConvention: 'asIs'
      }
    }
  },

  // https://stackoverflow.com/questions/51890879/how-to-rename-index-html-on-a-vue-js-build
  // https://cli.vuejs.org/guide/html-and-static-assets.html#the-index-file

  chainWebpack: (config) => {
    /* ==================== vue-svg-loader ==================== */
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    /* ==================== vue-svg-loader ==================== */

    /* ==================== html-webpack-plugin ==================== */
    config.plugin('html').tap((args) => {
      args[0].title = 'ABAOBA App';
      args[0].template = path.resolve('./src/index.html');

      return args;
    });
    /* ==================== html-webpack-plugin ==================== */
  },

  configureWebpack: () => {
    return {
      plugins: [
        /* config.plugin('copy') */
        new CopyPlugin([
          {
            from: path.resolve('./src/assets/images/favicons/favicon.ico'),
            to: path.resolve('./dist'),
            ignore: ['.DS_Store']
          }
        ])
      ]
    };
  }
};
