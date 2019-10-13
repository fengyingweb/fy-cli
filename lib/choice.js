
const inquirer = require('inquirer');

/**
 * 选择提示
 * @param {params} 类型Array 
 * @return Promise
 */
const choice = (params)=> {
  return inquirer
    .prompt(params)
    .then(answers => answers);
}

module.exports = choice;