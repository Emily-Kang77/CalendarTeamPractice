//console.log('Hello World!');
// makes http variable and imports http library. ok..
const http = require('http')
const fs = require('fs') //all file handling needed!
const port = 3000
// put function inside to create server
const server = http.createServer(function(req, res) {
    // for the server to do something, put code here
    res.writeHead(200, { 'Content-Type': 'text/html' }) // status code means everything went fine
    // read the index.html thing
    fs.readFile('./mywebsite/index.html', function(error, data) {
        if(error) {
            res.writeHead(404) //not found
            res.write("Error: File Not Found")
        } else {
            res.write(data) //data param is all info from index.html
        }
        res.end()
    })
    res.write('Hello World!') // shown to every person that requests from server
    
})

server.listen(port, function(error) {
    if(error) {
        // pass error onto log...
        console.log('Something went wrong!', error) // if error happens
    } else {
        console.log('Server is listening on port ' + port)
    }
})

