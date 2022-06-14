const obj = require('./module.js')
const os = require('os')
const path = require('path')

console.log(os.platform()) //win32

console.log(path.sep) // \
console.log(path.join('node_modules','.bin')) // node_modules\.bin
console.log(path.resolve('node_modules','.bin')) // C:\Users\...\node_modules\.bin