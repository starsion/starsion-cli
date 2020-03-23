#!/usr/bin/env node

const program = require('commander');
const debug = require('debug')('d-server');
const opn = require('../lib/open-browser.js')

program
    .option('-port')

program.parse(process.argv);

const args = program.args;

let port = args[0];

debug('\t\targs----- ', args);
debug('\t\tport----- ', args[0]);
opn.openBrowser(port);