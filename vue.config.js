/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { generateScopeName } = require('./utils/scope-name-generator');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devServer: {
    port: 6412
  },

  css: {
    extract: {
      ignoreOrder: isDevelopment ? false : true
    },
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          auto: /\.(sa|sc|c)ss$/i,
          mode: 'local',
          /* ==================== class name (styles) ==================== */
          ...(isDevelopment
            ? {
                // localIdentName: '[local]--[hash:base36:5]'
                localIdentName: '[local][[hash:base36:5]]'
              }
            : {
                getLocalIdent: (context, localIdentName, localName) =>
                  generateScopeName(localName, context.resourcePath)
              })
          /**
           * customize hash!!!!
           * @see https://www.npmjs.com/package/generic-names
           * @see https://stackoverflow.com/questions/67746387/different-hashes-between-css-loader-and-babel-plugin-react-css-modules
           */
          /* ==================== class name (styles) ==================== */
        },
        localsConvention: 'asIs'
      }
    }
  },

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
