const axios = require('axios');

/*const bro = async () => {
    console.log('bro')
    const response = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=30')
    console.log(response)
}

bro()*/

//inside an IIFE

(async () => {
    console.log('bro')
    const { strain, type, cannabinoid } = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=1')
    console.log(strain, type, cannabinoid)
})()