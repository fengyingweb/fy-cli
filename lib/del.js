'use strict'

const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');

const delTemplate = (name)=> {
  let canDel = false;
  const tempPath = path.join(process.cwd(), 'templates.json');
  fs.readJson(tempPath)
    .then(temp=> {
      let template = temp;
      Object.keys(template).forEach(key=> {
        if (key === name) {
          canDel = true;
        }
      });
      if (canDel) {
        delete template[name];
        fs.writeJson(tempPath, template, {spaces: 2})
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
    .catch((err)=> {
      console.error('error: ', err);
      console.error(chalk.red('读取模板文件失败'));
    })
}

module.exports = delTemplate;
