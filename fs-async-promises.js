const { readFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile) //as you can imagine, transforms it into a promise

/*const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
.then(result => console.log(result))
.catch(err => console.log(err))*/

const start = async () => {
    try {
        const one = await readFilePromise('./content/first.txt')
        const two = await readFilePromise('./content/subfolder/second.txt', 'utf8')
        console.log(one, two)
    } catch (error) {
        console.log(error)
    }  
}
start()

//exactly the same for writing files