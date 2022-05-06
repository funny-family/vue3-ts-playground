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
        enableObjectSlots: false
      }
    ],
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
