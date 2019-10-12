const chalk = require('chalk');
const templates = require('../templates.json');

const list = ()=> {
  if (!Object.keys(templates).length) {
    console.log(chalk.yellow('没有可用的模板'));
    return;
  }
  
  console.log(chalk.green('可用模板列表: ') + '\n');
  Object.keys(templates).forEach(key=> {
    let val = templates[key];
    console.log(chalk.green(key + ': ' + val.description) + '\n')
  })
}

module.exports = list;
