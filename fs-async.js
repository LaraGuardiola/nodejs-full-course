const { writeFile, readFile } = require('fs')

//asyncronous way to read and write files
readFile('content/first.txt', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const one = result
    readFile('./content/subfolder/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err)
            return 
        }
        const two = result
        writeFile(
            './content/result_async.txt',
            `Here is the result my boy: ${one}, ${two}`,
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})
console.log('shit')