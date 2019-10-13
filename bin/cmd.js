const program = require('commander');
const pkg = require('../package.json');
const init = require('../lib/init');
const list = require('../lib/list');
const addTemplate = require('../lib/add');
const delTemplate = require('../lib/del');

program
  .version(pkg.version, '-v, --version');

  // 查看模板列表命令
program
.command('list')
.description('查看模板列表')
.alias('l')
.action(()=> {
  list();
});

// 初始化项目
program
  .command('init [name]')
  .description('初始化工程模板, name(模板名称)')
  .alias('i')
  .action(name=> {
    init(name);
  });


// 添加模板命令
program
  .command('add <name> <gitUrl> <description>')
  .description('添加模板, name(模板名称), gitUrl(git仓库地址), description(描述)')
  .alias('a')
  .action((name, url, desc)=> {
    addTemplate(name, url, desc);
  });

// 删除模板命令
program
  .command('delete <name>')
  .description('删除模板, name(模板名称)')
  .alias('del')
  .action((name)=> {
    delTemplate(name);
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}