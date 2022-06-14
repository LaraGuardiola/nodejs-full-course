const { writeFileSync, readFileSync } = require('fs')
//syncronous way to write files

//reads the txt files inside the folders
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first, second)

writeFileSync(
    './content/result_sync.txt',
    `Here is the result fella: ${first}, ${second}`,
    { flag: 'a'}
)