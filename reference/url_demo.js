const url = require('url');

const myUrl = new URL('http://www.mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root)
console.log(myUrl.host);

// Hostname (does not ger port, in case the URL has it included)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams)

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));