const path = require('path')
const pack = require('../starsion.config')
const curPath = process.cwd();

console.log('----1',process)
console.log('----2', path)
console.log('----3', __dirname)
console.log('----4',curPath, path.resolve(curPath, 'starsion.config.js'))
console.log('----5', __filename)
console.log('----6', pack)

