const fs = require('fs-extra');
const chalk = require('chalk');

const delTemplate = (name)=> {
  let canDel = false;
  fs.readJson('../templates.json')
    .then(temp=> {
      let template = temp;
      Object.keys(template).forEach(key=> {
        if (key === name) {
          canDel = true;
        }
      });
      if (canDel) {
        delete template[name];
        fs.writeJson('../templates.json', template, {spaces: 2})
          .then(()=> {
            console.log(chalk.green('删除模板成功'));
          })
          .catch(()=> {
            console.log(chalk.red('删除模板失败'));
          })
      } else {
        console.log(chalk.red('没有对应的模板可删除'));
      }
    })
    .catch(()=> {
      console.error(chalk.red('读取模板文件失败'));
    })
}

module.exports = delTemplate;
