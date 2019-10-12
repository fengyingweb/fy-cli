const fs = require('fs-extra');
const chalk = require('chalk');

const addTemplate = (name, url, desc)=> {
  let canWrite = true;
  fs.readJson('../templates.json')
    .then(temp=> {
      let template = temp
      Object.keys(template).forEach(key=> {
        if (key === name) {
          canWrite = false;
        }
      });
      if (canWrite) {
        template[name] = {
          gitUrl: url,
          description: desc
        };
        fs.writeJson('../templates.json', template, {spaces: 2})
        .then(()=> {
          console.log(chalk.green('添加模板成功'));
        })
        .catch(()=> {
          console.log(chalk.red('添加模板失败'));
        })
      } else {
        console.log(chalk.red('添加失败, 文件已存在相同名称模板'));
      }
    })
    .catch(err=> {
      console.error(chalk.red('读取模板文件失败'));
    });
}

module.exports = addTemplate;