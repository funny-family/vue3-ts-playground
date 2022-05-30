/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @typedef { import("@vue/cli-service").ProjectOptions } ProjectOption
 * @typedef { import("webpack-chain") ChainWebpack }
 */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { generateScopeName } = require('./utils/scope-name-generator');
const isDevelopment = process.env.NODE_ENV === 'development';

// https://github.com/vuejs/vue-cli/issues/2138

/** @type {ProjectOption} */
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
    // https://vue-svg-loader.js.org/faq.html#how-to-use-both-inline-and-external-svgs
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      /* ==================== internal svg ==================== */
      // Replace Vue's existing base loader by first clearing it
      // https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
      .rule('svg')
      .uses.clear()
      .end()
      // Required (since upgrading vue-cli to v5) to stop the default import behavior, as documented in:
      // https://webpack.js.org/configuration/module/#ruletype
      .type('javascript/auto')
      .oneOf('inline')
      .resourceQuery(/inline/)
      // Add vue-loader as a loader for Vue single-file components
      // https://www.npmjs.com/package/vue-loader
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      // Add vue-svg-loader as a loader for importing .svg files into Vue single-file components
      // Located in ./vue-svg-loader.js
      .use('./utils/vue-svg-loader')
      .loader('./utils/vue-svg-loader')
      .end()
      /* ==================== internal svg ==================== */
      /* ==================== external svg ==================== */
      .end()
      .oneOf('external')
      // https://v4.webpack.js.org/loaders/file-loader/#options
      .use('file-loader')
      .loader('file-loader')
      .options({
        get name() {
          if (isDevelopment) {
            return '[path][name].[ext]';
          }

          // return 'assets/[name].[hash:8].[ext]';
          // return '[contenthash].[ext]';
          // return 'dirname/[contenthash].[ext]';
          // return '[path][name].[ext]?[contenthash]';
          return 'img/[name].[contenthash].[ext]';
        }
      });
    /* ==================== external svg ==================== */
    /* ==================== vue-svg-loader ==================== */

    /* ==================== html-webpack-plugin ==================== */
    config.plugin('html').tap((args) => {
      args[0].title = 'ABAOBA App';
      args[0].template = path.resolve('./src/public/index.html');

      return args;
    });
    /* ==================== html-webpack-plugin ==================== */
  },

  configureWebpack: (config) => {
    config.devtool = 'source-map';

    return {
      plugins: [
        /* config.plugin('copy') */
        new CopyPlugin([
          {
            from: path.resolve('./src/public'),
            to: path.resolve('./dist'),
            ignore: ['.DS_Store']
          }
        ])
      ]
    };
  }
};
