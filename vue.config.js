// const { customAlphabet } = require('nanoid');

// const alphabetOfSmallLetters = [...Array(26)].map((x, i) => String.fromCharCode(i + 97));
// const alphabetOfBigLetters = [...Array(26)]
//   .map((e, i) => i + 65)
//   .map((x) => String.fromCharCode(x));
// const arrayOfNumbersFromZeroToTen = [...Array(10).keys()];

// const alphabet = [
//   ...alphabetOfSmallLetters,
//   ...alphabetOfBigLetters,
//   ...arrayOfNumbersFromZeroToTen
// ].join('');
// const nanoid = customAlphabet(alphabet, 5);

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

  configureWebpack: {
    // module: {
    //   rules: [
    //     // ... other rules omitted
    //     {
    //       test: /\.(sa|sc|c)ss$/i,
    //       use: [
    //         {
    //           loader: 'vue-style-loader'
    //         },
    //         {
    //           loader: 'css-loader',
    //           options: {
    //             importLoaders: 1,
    //             modules: {
    //               mode: 'local',
    //               localIdentName: '[local]--[hash:base36:5]'
    //             }
    //           }
    //         },
    //         {
    //           loader: 'sass-loader'
    //         }
    //       ]
    //     }
    //   ]
    // }
  }
};
