#!/usr/bin/env node

const program = require('commander');
const { log } = require('../utils');

program
  .option('-f, --force', 'force installation')
  .parse(process.argv);

const pkgs = program.args;

if (!pkgs.length) {
  console.error('packages required');
  process.exit(1);
}

if (program.force) console.log('  force: install');
pkgs.forEach(function (pkg) {
  console.log('  install : %s', pkg);
});