'use strict';

var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0])
                   .reduce((acc, curr) => acc += curr);

console.log(result);
