import math from './05_modules_default_export_module';

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(math.PI);
console.log(math.sqrt(+arg1));
console.log(math.square(+arg2));
