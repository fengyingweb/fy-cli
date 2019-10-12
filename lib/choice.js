
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

// choice([{
//   type: 'input',
//   name: 'firstName',
//   message: '你的姓名'
// },{
//   type: 'list',
//   name: 'template',
//   message: '请选择框架模板',
//   choices: ['vue-2', 'vue-3', 'vue-ssr']
// },{
//   type: 'confirm',
//   name: 'isInstall',
//   message: '是否立即安装依赖'
// }])
//   .then(res=> {
//     console.log(JSON.stringify(res, null, 2));
//   })

module.exports = choice;