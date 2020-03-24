const chalk = require('chalk');
const log = console.log;

function warning(text) {
    log(chalk.yellow.bold(text));
}

function error(text) {
    log(chalk.red.bold(text));
}

function info(text) {
    log(chalk.blue.bold(text));
}

function success(text) {
    log(chalk.cyan.bold(text));
}

// warning('warning');
// error('error');
// info('info');
// success('success');

module.exports = {
    warning,
    info,
    error,
    success
}
