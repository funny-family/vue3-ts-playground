/* eslint-disable @typescript-eslint/no-var-requires */

// const { resolve: resolvePath } = require('path');
// const context = resolvePath(__dirname, 'src');
// const { generateScopeName } = require('./utils/scope-name-generator');

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        transformOn: false,
        optimize: true,
        enableObjectSlots: false,
        mergeProps: true
      }
    ]

    // [
    //   'babel-plugin-rename-jsx-attribute',
    //   {
    //     className: 'class'
    //   }
    // ]

    // [
    //   'react-css-modules',
    //   {
    //     attributeNames: {
    //       styleName: null,
    //       className: 'class'
    //     }
    //   }
    // ]

    // [
    //   'react-css-modules',
    //   {
    //     context,
    //     generateScopedName:
    //       process.env.NODE_ENV === 'development'
    //         ? '[local][[hash:base36:5]]'
    //         : generateScopeName,
    //     // Кастомизируем отображение аттрибутов
    //     attributeNames: {
    //       styleName: 'class'
    //     }
    //   }
    // ]
  ]
};
