const path = require('path');
const Utils = require('./utils');
const debug = require('debug')('webpack.config.js');

const curPath = process.cwd();
const log = Utils.log;

debug('\t\tconfig----- ', path.resolve(curPath, 'starsion.config.js'));

const config = require(path.resolve(curPath, 'starsion.config.js'));
const _config = require('./starsion.config.js');
const _outputPath = path.resolve(__dirname, 'public');

let mergeConfig = Object.assign(_config, config);

debug('\t\tmergeConfig----- ', mergeConfig);

module.exports = {
    entry: mergeConfig.entry || './index.js',
    output: {
        path: _outputPath,
        filename: 'bundle.js'
    },
};