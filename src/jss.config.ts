import jss from 'jss';

/*
  "Generate your class names"
  https://cssinjs.org/jss-api/?v=v10.0.0-alpha.9#generate-your-class-names
 */

export default jss.setup({
  createGenerateId: (options) => {
    return (rule, sheet) => {
      return '';
    };
  }
});
