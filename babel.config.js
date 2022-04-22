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
    ]
    // [
    //   'react-css-modules', // babel-plugin-react-css-modules
    //   {
    //     attributeNames: {
    //       styleName: 'class'
    //     }
    //   }
    // ]
  ]
};
