const fs = require('fs');
const path = require('path');

// 1- Create a folder
/*
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) throw err;
    console.log('Folder created...');
})
*/

// 2- Create and write to file
/*
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world!', (err) => {
    if (err) throw err;
    console.log('File written to...');
    
    //File append - (Adding more text, place it inside the callback)
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I love Node.js!', (err) => {
        if (err) throw err;
        console.log('File written to...');
    })
})
*/

// 3- Read file
/*
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
*/

// 4- Rename file
fs.rename(
    path.join(__dirname, 'test', 'hello.txt'), 
    path.join(__dirname, 'test', 'helloWorld.txt'),
    (err, data) => {
    if (err) throw err;
    console.log('File renamed... ');
})
