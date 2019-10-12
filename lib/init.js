const fs = require('fs-extra');
const chalk = require('chalk');
const choice = require('./choice');
const templates = require('../templates.json');

const init = (name)=> {
  console.log(name);
};

module.exports = init;
