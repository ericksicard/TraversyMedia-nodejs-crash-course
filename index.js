/*** THIS IS THE CODE EXAMPLE FOR EVENT EMITERS
const Person = require('./person');
const Logger = require('./logger');

//const person1 = new Person('Erick Sicard', 39);
//console.log(person1.greeting());

// Creates an emitter object
const logger = new Logger();

// Initiallize event listener (they are gonna be waiting for the events to be fired when class methods are called)
logger.on('ramdonId', (data) => console.log('Ramdon Id: ', data))
logger.on('message', (data) => console.log('Message: ', data))

// Emit event
logger.id();
logger.msg('Hello world');
***/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer( (req, res) => {

//    if (req.url === '/') {
//        fs.readFile(
//            path.join(__dirname, 'public', 'index.html'),
//            (err, content) => {
//                if (err) throw err;
//                res.writeHead(200, {'Content-Type':'text/html'});
//                res.end(content)
//            }
//        )        
//    }
//
//    // REST API style case
//    if (req.url === '/api/users') {
//        //Hard coding a response
//        const users = [
//            {name: 'Erick Sicard', age: 40},
//            {name: 'Odalys Iglesias', age: 32}
//        ];
//        res.writeHead(200, {'Content-Type':'application/json'});
//        res.end(JSON.stringify(users));
//    }

    // Built file path (dimanic)
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? "index.html" : req.url
    );

    // Extention of the file
    let extName = path.extname(filePath);

    // Initial content type (default)
    let contentType = 'text/html';

    // Check extension and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;    
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code == 'ENOENT') {
                    //Page not found
                    fs.readFile(
                        path.join(__dirname, 'public', '404.html'),
                        (err, content) => {
                            res.writeHead(200, {'Content-Type':'text/html'});
                            res.end(content, 'utf8')        
                        })
                } else {
                    // Some server error
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`)
                }
            } else {
                // Success
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf8') 
            }
    });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));