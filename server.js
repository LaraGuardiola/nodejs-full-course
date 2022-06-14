//import { num } from './module.js'

//if in package.json type wasnt module, it would be like this:
const obj = require('./module.js')
const os = require('os')
const path = require('path')
const { readFileSync, writeFileSync } = require('fs') //in order to read files from the pc

//reads the txt files inside the folders
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first, second)

//syncronous way to write files
writeFileSync(
    './content/result_sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'}
)
//* GLOBAL VARIABLES
// __dirname    - path to current directory
// __filename   - path to current file
// require      - function to use modules (commonJS ones not ES6 like the one above)
// module       - info about current module (file)
// process      - info about environment where the program is being executed


//testing quick snippet in node js
const flag = false;

flag ? console.log('es true') : console.log(); //10 from module.js

let {age, name} = obj
console.log(age,name)
/*for(let elem of Object.values(obj)){
    console.log(elem)
}*/
console.log(os.platform()); //win32

console.log(path.sep) // \
console.log(path.join('node_modules','.bin')) // node_modules\.bin
console.log(path.resolve('node_modules','.bin')) // C:\Users\...\node_modules\.bin