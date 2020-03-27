const open = require('open');
const path = require('path');
const shell = require('shelljs');
const debug = require('debug')('open-browser')
const fs = require('fs')

const Utils = require('../utils');
const { defaultPort, defaultUrl } = require('../config');

const log = Utils.log;
const curPath = process.cwd();
const config = require('../starsion.config.js')

debug('\t\t config----- ', config)
debug('\t\t current path----- ', process.cwd())

function computedServerCmd(port = defaultPort) {
    //defualt path is ./
    // let { path = '' } = config;
    let serverCmd = `http-server ${path.resolve(__dirname, `../public`)} -p ${port}`;
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

function createStaticFile() {
    return new Promise((resolve, reject)=>{
        let oringin = path.resolve(__dirname, '../public/index.html');
        let target = `${curPath}/public/index.html`;
        let publicPath = `${curPath}/public`;
    
        debug('\t\t oringin----- ', oringin);
        debug('\t\t target----- ', target);
        debug('\t\t publicPath----- ', publicPath);
    
        if (Utils.checker.isFolderExists(publicPath)) {
            Utils.tool.copyFile(oringin, target);
        } else {
            fs.mkdirSync(publicPath);
            Utils.tool.copyFile(oringin, target);
        }
    })
}

/**
 * open in browser with new URL
 * @param {*} port 
 */
async function openBrowser(port = defaultPort) {
    try {
       await createStaticFile();
        startServer(port);
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