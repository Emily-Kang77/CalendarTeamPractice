'use strict';
const fs = require('fs');
// arrow-function expression. () means no arguments 
// expected. body of function is after arrow. this is uesd so 
// we don't need to use function() {} every time.arrow functions
// should be "first choice" to declare function expressions.
fs.watch('target.txt', () => console.log('File changed!'));
console.log('Now watching target.txt for changes!');
