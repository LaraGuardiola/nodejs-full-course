const http = require('http') //importing http module

//creating the server
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World')
        res.end()
    }
    if(req.url === '/about'){
        res.write('About Page')
        res.end('')
    }      
})

server.listen(5000)