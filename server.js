const http = require('http');

// creating bare minimum server

// http://localhost:4001/footballer
// http://localhost:4001/coach

const server = http.createServer((request, response) => {
    console.log('request was made');
    if(request.url == '/footballer' && request.method == 'GET') {
        response.end(JSON.stringify({
            name: 'Lionel Messi',
            age: 32
        }))
    } else if(request.url == '/coach' && request.method == 'GET') {
        response.end(JSON.stringify({
            name: 'Jose Mourinho',
            age: 67
        }))
    }
})

server.listen(4001, () => {
    console.log('server is up and running');
})