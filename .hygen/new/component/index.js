const {
  fromCableToCamelCase
} = require('../../../utils/from-cable-to-camel-case');
const { capitalize } = require('../../../utils/capitalize');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Where is the directory? (Optional)'
      }
    ];

    return inquirer.prompt(questions).then((component) => {
      const componentNameInCableCase = component.name;
      const componentNameInCamelCase = capitalize(
        fromCableToCamelCase(component.name)
      );
      const componentDirectory = component.directory;

      const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g;
      if (!kebabCaseRegex.test(componentNameInCableCase)) {
        console.error(
          '\x1b[31m',
          `Component name ${componentNameInCableCase} must be in kebab-case!`
        );
        process.exit(1);
      }

      const path = `${
        componentDirectory ? `${componentDirectory}/` : ``
      }${componentNameInCableCase}`;
      const absPath = `src/app/shared/components/${path}`;

      const value = {
        ...component,
        path,
        absPath,
        componentNameInCableCase,
        componentNameInCamelCase,
        componentDirectory
      };

      console.log(value);

      return value;
    });
  }
};

// https://habr.com/ru/company/timeweb/blog/534686/
