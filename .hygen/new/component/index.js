/**
 * @typedef { import("hygen") } Hygen
 * @typedef { import("inquirer").Question } InquirerQuestion
 */
const {
  fromCableToCamelCase
} = require('../../../utils/from-cable-to-camel-case');
const { capitalize } = require('../../../utils/capitalize');

// https://github.com/jondot/hygen/issues/35

// https://www.npmtrends.com/hygen-vs-plop-vs-slush-vs-yeoman-generator

// https://www.npmjs.com/package/plop

// https://www.npmjs.com/package/yeoman-generator
// https://yeoman.io/authoring/user-interactions.html

// https://www.joshcanhelp.com/generate-eleventy-posts-with-hygen/

// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

module.exports = {
  prompt: ({ inquirer }) => {
    /** @type {InquirerQuestion[]} */
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
      },
      {
        type: 'multiselect',
        name: 'additionalOptions',
        // choices: ['props', 'emits', 'binding support'],
        choices: [
          {
            key: 'haveProps',
            value: 'props',
            name: 'Have props?'
          },
          {
            key: 'haveProps',
            value: 'props',
            name: 'Have props?'
          },
        ],
        message: 'Select additional options for the component.'
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Where is the directory? (Optional)'
      }
    ];

    return inquirer.prompt(questions).then((component) => {
      console.log('component data:', component);

      const componentNameInCableCase = component.name;
      const componentNameInCamelCase = capitalize(
        fromCableToCamelCase(component.name)
      );

      const shouldComponentHaveProps =
        component.additionalOptions.includes('props');
      const shouldComponentHaveEmits =
        component.additionalOptions.includes('emits');
      const shouldComponentHaveBindingDataSupport =
        component.additionalOptions.includes('binding support');

      const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g;
      if (!kebabCaseRegex.test(componentNameInCableCase)) {
        console.error(
          '\x1b[31m',
          `Component name "${componentNameInCableCase}" must be in kebab-case!`
        );
        process.exit(1);
      }

      const componentDirectory = component.directory;
      const path = `${
        componentDirectory ? `${componentDirectory}/` : ``
      }${componentNameInCableCase}`;
      const absPath = `src/app/shared/components/${path}`;

      const templateData = {
        absPath,
        componentDirectory,

        componentNameInCableCase,
        componentNameInCamelCase,

        shouldComponentHaveProps,
        shouldComponentHaveEmits,
        shouldComponentHaveBindingDataSupport
      };

      console.log('template data:', templateData);

      return templateData;
    });
  }
};

// https://habr.com/ru/company/timeweb/blog/534686/

// https://github.com/jondot/hygen/issues/23
