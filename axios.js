const axios = require('axios');

/*const bro = async () => {
    console.log('bro')
    const response = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=30')
    console.log(response)
}

bro()*/

//inside an IIFE
/*(async () => {
    console.log('bro')
    const result = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=1')
    console.log(result)
})()*/

class GuardiaCivil {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //GC fetches illegal substances
    async commandeer(){
        const result = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=1')
        let { strain, cannabinoid } = result.data[0]
        console.log(strain, cannabinoid)
    }
}

let JC = new GuardiaCivil('jc', 30)
setTimeout(() => console.log(JC.age, JC.name), 5000)
JC.commandeer()