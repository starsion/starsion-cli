const open = require('open');
const path = require('path');
const shell = require('shelljs');
const debug = require('debug')('open-browser')

const Utils = require('../utils');
const { defaultPort, defaultUrl } = require('../config');

const log = Utils.log;
const curPath = process.cwd();
const config = require(path.resolve(curPath, './starsion.config.js'))

debug('\t\tconfig----- ', config)
debug('\t\tcurrent path----- ', process.cwd())

function computedServerCmd(port = defaultPort) {
    //defualt path is ./
    let { path = '' } = config;
    let serverCmd = `http-server ./${path} -p ${port}`;
    debug('\t\tserverCmd----- ', serverCmd);
    return serverCmd
}

/**
 * start server
 * @param {*} port 
 * @param {*} oprions [TODO]
 * @param {*} callback [TODO]
 */
function startServer(port, options = {}, callback) {
    try {
        shell.exec(computedServerCmd(port), options, () => { })
    } catch (error) {
        log.error(error)
        process.exit(-1);
    }
}

/**
 * open in browser with new URL
 * @param {*} port 
 */
function openBrowser(port = defaultPort) {
    startServer(port);
    try {
        if (Utils.checker.isValidPort(port)) {
            open(`${defaultUrl}:${port}`);
        } else {
            log.warning('请输入正确端口号');
        }
    } catch (error) {
        log.error(error)
        process.exit(-1);
    }
}

module.exports = { openBrowser };