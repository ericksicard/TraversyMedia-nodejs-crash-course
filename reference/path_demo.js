const path = require('path');

//Base file name
console.log(__filename);
console.log(path.basename(__filename));

//Directory name
console.log(__dirname);
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Creates path object
console.log(path.parse(__filename));

//Concatenate path
  // ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))