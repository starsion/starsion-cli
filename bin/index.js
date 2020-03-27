#!/usr/bin/env node --harmony

const program = require('commander');
const package = require('../package.json');

program.version(package.version);

program
    .command('server [port]', '启动一个服务, \n\tport -- 设置端口，默认3000\n', {executableFile: 'd-server'}).alias('s')
    .command('build', '打包代码', {executableFile: 'd-build'}).alias('b')
    .command('test', '测试一下', {executableFile: 'd-test'}).alias('t')

program.parse(process.argv);