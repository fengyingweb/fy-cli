const choice = require('./choice');
const templates = require('../templates.json');
const fs = require('fs-extra');
const chalk = require('chalk');
const shell = require('shelljs');
const downloadTemp = require('./download');
const ora = require('ora');
const spinner = ora();
const path = require('path');

const init = (name)=> {
  if (!name) {
    choice([{
      type: 'list',
      name: 'template',
      message: '请选择框架模板',
      choices: Object.keys(templates)
    }])
      .then(res=> {
        name = res.template;
        startDown(name);
      })
  } else {
    if (!Object.keys(templates).includes(name)) {
      console.log(chalk.red('找不到对应的模板') + '\n');
      
      shell.exec('fyc list');
      shell.exit(1);
    }
    startDown(name);
  }
};

// 下载模板
function startDown(name) {
  console.log(chalk.yellow('开始初始模板, 可能需要几分钟, 喝杯咖啡在来吧...'))
  spinner.start('loading...');
  downloadTemp(templates[name].gitUrl, name)
    .then(()=> {
      let pkgPath = path.join(process.cwd(), `${name}/package.json`)
      fs.readJson(pkgPath)
        .then(pkg=> {
          let package = pkg;
          package.name = name;
          package.version = '1.0.0';
          fs.writeJson(pkgPath, package, {spaces: 2})
            .then(()=> {
              spinner.succeed('success');
              console.log(chalk.green('初始模板完毕'));
              console.log(chalk.yellow('手动安装 cd ' + name) + '\n'
                + chalk.yellow('npm install or yarn install') + '\n'
                + chalk.yellow('本地运行npm start') + '\n'
                + chalk.yellow('生成构建npm run build')
              );
              process.exit();
            })
            .catch(()=> {
              spinner.succeed('success');
              console.log(chalk.red('修改模板package.json文件失败'));
              console.log(chalk.green('初始模板完毕'));
              console.log(chalk.yellow('手动安装 cd ' + name) + '\n'
              + chalk.yellow('npm install or yarn install') + '\n'
              + chalk.yellow('本地运行npm start') + '\n'
              + chalk.yellow('生成构建npm run build')
            );
              process.exit();
            })
        })
        .catch(()=> {
          spinner.succeed('success');
          console.log(chalk.red('读取模板package.json文件失败'));
          console.log(chalk.green('初始模板完毕'));
          console.log(chalk.yellow('手动安装 cd ' + name) + '\n'
          + chalk.yellow('npm install or yarn install') + '\n'
          + chalk.yellow('本地运行npm start') + '\n'
          + chalk.yellow('生成构建npm run build')
        );
          process.exit();
        })
    })
    .catch(err=> {
      spinner.fail('failed');
      console.log(chalk.red('初始模板失败'))
      process.exit();
    });
}

// 安装模板
// function install(name) {
//   choice([{
//     type: 'confirm',
//     name: 'isInstall',
//     message: '是否立即安装依赖'
//   }]).then(res1=> {
//     if (res1.isInstall) {
//       choice([{
//         type: 'list',
//         name: 'method',
//         message: '请选择安装方法',
//         choices: ['npm', 'yarn']
//       }]).then(res2=> {
//         shell.cd(name);
//         shell.exec(`${res2.method} install`);
//         shell.exit(1);
//       })
//     } else {
//       console.log(chalk.yellow('手动安装npm install or yarn install') + '\n'
//         + chalk.yellow('本地运行npm start') + '\n'
//         + chalk.yellow('生成构建npm run build')
//       );
//       process.exit();
//     }
//   });
// }

module.exports = init;
