const path = require('path');
const shell = require('shelljs');
const debug = require('debug')('open-browser')

const Utils = require('../utils');
const { defaultPort, defaultUrl } = require('../config');

const log = Utils.log;
const curPath = process.cwd();
const config = require( '../starsion.config.js')

function build(port, options = {}, callback) {
    try {
        shell.cd(__dirname);
        shell.cd('../');
        shell.exec('npm run __build', options, () => { })
    } catch (error) {
        log.error(error)
        process.exit(-1);
    }
}

module.exports = { build };