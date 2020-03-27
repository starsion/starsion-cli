const fs = require('fs')

function copyFile (oringin, target) {
    return new Promise((resolve, reject)=>{
        fs.readFile(oringin, function (err, data) {
            if (err) {
                log.error(err);
                reject(err);
            };
            fs.writeFile(target, data, function (err) {
                if (err) {
                    reject(err);
                    log.error(err);
                } else {
                    resolve(1);
                }
            })
        })
    })
}

module.exports = {
    copyFile
}