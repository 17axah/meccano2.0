import string from 'lodash/string.js'

export default function (plop) {
  plop.setHelper('kebabCase', string.kebabCase)

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'component',
        message: 'Enter component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase component}}/{{kebabCase component}}.html',
        templateFile: 'plop-templates/component-html.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase component}}/{{kebabCase component}}.styl',
        templateFile: 'plop-templates/component-styl.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase component}}/{{kebabCase component}}.js',
        templateFile: 'plop-templates/component-js.hbs',
      },
    ],
  })
}
