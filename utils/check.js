const fs = require('fs');

const curPath = process.cwd();

/**
 * port need to check
 * @param {[Number, String]} port port 
 * @return {Boolean} bool
 */
function isValidPort(port = '') {
    let reg = new RegExp(/^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$/);
    if (!port) {
        return false
    }
    if (reg.test(port)) {
        return true
    } else {
        return false
    }
}

function isFolderExists(_path) {
    fs.exists(_path, (exist)=>{
        if(exist) {
            return true;
        } else {
            return false;
        } 
    })
}

module.exports = {
    isValidPort,
    isFolderExists
}