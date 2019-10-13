## 基于VUE的前端框架脚手架

### 安装

> npm install -g fyc-cli

### 查看版本命令

> fyc -v

输出: 1.0.0

### 帮助命令
> fyc -h

输出:
````
Usage: cmd [options] [command]

Options:
  -v, --version                        output the version number
  -h, --help                           output usage information

Commands:
  list|l                               查看模板列表
  init|i [name]                        初始化工程模板, name(模板名称)
  add|a <name> <gitUrl> <description>  添加模板, name(模板名称), gitUrl(git仓库地址), description(描述)
  delete|del <name>                    删除模板, name(模板名称)
````

### 初始化项目

> fyc init [name]

### 查看模板列表

> fyc list
